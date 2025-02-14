
  document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('country');
    const locationSelect = document.getElementById('location');
    const hotelSelect = document.getElementById('hotel_name');

    countrySelect.addEventListener('change', function () {
        const selectedCountry = this.value;
        loadCountryData(selectedCountry); // 加载选定国家的数据
    });

    // 默认加载第一个国家的数据
    loadCountryData(countrySelect.value);

    function loadCountryData(country) {
        // 加载该国家的 JSON 数据
        fetch(`https://cooiip.github.io/HPC/assets/${country}.json`)
            .then(response => response.json())
            .then(data => {
                updateLocationOptions(data);
                updateHotelOptions(data);
            })
            .catch(err => {
                console.error("加载数据失败:", err);
                alert("无法加载数据，请稍后再试。");
            });
    }

    function updateLocationOptions(data) {
        const locations = [...new Set(data.map(item => item.Location))];
        locationSelect.innerHTML = '';  // 清空现有选项
        const fragment = document.createDocumentFragment();
        locations.forEach(function(location) {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            fragment.appendChild(option);
        });
        locationSelect.appendChild(fragment);
    }

    function updateHotelOptions(data) {
        const hotels = [...new Set(data.map(item => item.Hotel_Name))];
        hotelSelect.innerHTML = '';  // 清空现有选项
        const fragment = document.createDocumentFragment();
        hotels.forEach(function(hotel) {
            const option = document.createElement('option');
            option.value = hotel;
            option.textContent = hotel;
            fragment.appendChild(option);
        });
        hotelSelect.appendChild(fragment);
    }

    // 计算总价
    document.getElementById('calculate').addEventListener('click', function () {
        // 清空上一次输出的内容
        document.getElementById('error_message').style.display = "none";
        document.getElementById('price_table').innerHTML = ''; // 清空价格表
        document.getElementById('remark_message').innerHTML = '';  // 清空备注信息

        const country = document.getElementById('country').value;
        const location = document.getElementById('location').value;
        const hotelName = document.getElementById('hotel_name').value;
        const checkinDate = document.getElementById('checkin_date').value;
        const checkoutDate = document.getElementById('checkout_date').value;

        // 日期验证
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);

        const days = Math.ceil((checkout - checkin) / (1000 * 3600 * 24));

        if (isNaN(days) || days <= 0) {
            document.getElementById('error_message').textContent = "请确保离店日期晚于入住日期。";
            document.getElementById('error_message').style.display = "block";
            return;
        } else {
            document.getElementById('error_message').style.display = "none";
        }

        // 获取该国家的数据（此处假设已加载该国家的 JSON 数据）
        fetch(`https://cooiip.github.io/HPC/assets/${country}.json`)
            .then(response => response.json())
            .then(data => {
                const selectedHotelData = data.filter(item => item.Location === location && item.Hotel_Name === hotelName);
                const priceSummary = calculateTotalPrice(selectedHotelData, checkin, checkout, days);
                displayPriceTable(priceSummary);
            })
            .catch(err => {
                console.error("加载数据失败:", err);
                alert("无法加载数据，请稍后再试。");
            });
    });

    // 计算每种房型的总价（按日期范围累加价格）
    function calculateTotalPrice(hotelData, checkin, checkout, days) {
        const priceSummary = [];

        hotelData.forEach(function(item) {
            const roomType = item.Room_Type;

            if (priceSummary.some(function(entry) { return entry.Room_Type === roomType; })) return;

            let totalPrice = 0;

            for (let i = 0; i < days; i++) {
                const currentDate = new Date(checkin);
                currentDate.setDate(currentDate.getDate() + i);
                const currentDateString = currentDate.toISOString().split('T')[0];

                const dayData = hotelData.find(function(d) { return d.Date === currentDateString && d.Room_Type === roomType; });
                if (dayData) {
                    totalPrice += dayData.Cost;
                }
            }

            const unitPrice = (totalPrice / days).toFixed(1);
            const totalPriceFormatted = totalPrice.toFixed(0);

            priceSummary.push({
                Room_Type: roomType,
                Unit_Price: unitPrice,
                Number_of_Nights: days,
                Total_Price: totalPriceFormatted
            });
        });

        return priceSummary;
    }

    // 显示价格表
    function displayPriceTable(priceSummary) {
        const priceTable = document.getElementById('price_table');
        priceTable.innerHTML = ''; // 清空现有表格

        if (priceSummary.length === 0) {
            priceTable.innerHTML = '没有找到相关房型价格数据。';
            return;
        }

        const table = document.createElement('table');
        table.border = 1;
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>房型</th><th>单价</th><th>天数</th><th>总价</th>';
        table.appendChild(headerRow);

        priceSummary.forEach(function(row) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${row.Room_Type}</td><td>${row.Unit_Price}</td><td>${row.Number_of_Nights}</td><td>${row.Total_Price}</td>`;
            table.appendChild(tr);
        });

        priceTable.appendChild(table);
    }
});
