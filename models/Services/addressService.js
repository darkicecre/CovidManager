const { models } = require("..");
const { QueryTypes } = require("sequelize");


const getDataStringify = ()=>{
    return data;
}


module.exports = { getDataStringify };

var data = `
[
    {
        "id":1,
        "name":"Hồ Chí Minh",
        "district":[
            {
                "id":1,
                "name":"Huyện Bình Chánh"
            },
            {
                "id":2,
                "name":"Quận Bình Tân"
            },
            {
                "id":3,
                "name":"Quận Bình Thạnh"
            },
            {
                "id":4,
                "name":"Huyện Cần Giờ"
            },
            {
                "id":5,
                "name":"Huyện Củ Chi"
            },
            {
                "id":6,
                "name":"Quận Gò Vấp"
            },
            {
                "id":7,
                "name":"Huyện Hóc Môn"
            },
            {
                "id":8,
                "name":"Huyện Nhà Bè"
            },
            {
                "id":9,
                "name":"Quận Phú Nhuận"
            },
            {
                "id":10,
                "name":"Quận 1"
            },
            {
                "id":11,
                "name":"Quận 10"
            },
            {
                "id":12,
                "name":"Quận 11"
            },
            {
                "id":13,
                "name":"Quận 12"
            },
            {
                "id":14,
                "name":"Quận 2"
            },
            {
                "id":15,
                "name":"Quận 3"
            },
            {
                "id":16,
                "name":"Quận 4"
            },
            {
                "id":17,
                "name":"Quận 5"
            },
            {
                "id":18,
                "name":"Quận 6"
            },
            {
                "id":19,
                "name":"Quận 7"
            },
            {
                "id":20,
                "name":"Quận 8"
            },
            {
                "id":21,
                "name":"Quận 9"
            },
            {
                "id":22,
                "name":"Quận Tân Bình"
            },
            {
                "id":23,
                "name":"Quận Tân Phú"
            },
            {
                "id":24,
                "name":"Quận Thủ Đức"
            }
        ]
    },
    {
        "id":2,
        "name":"Hà Nội",
        "district":[
            {
                "id":1,
                "name":"Quận Ba Đình"
            },{
                "id":2,
                "name":"Huyện Ba Vì"
            },{
                "id":3,
                "name":"Quận Bắc Từ Liêm"
            },{
                "id":4,
                "name":"Quận Cầu Giấy"
            },{
                "id":5,
                "name":"Huyện Chương Mỹ"
            },{
                "id":6,
                "name":"Huyện Đan Phượng"
            },{
                "id":7,
                "name":"Huyện Đông Anh"
            },{
                "id":8,
                "name":"Quận Đống Đa"
            },{
                "id":9,
                "name":"Huyện Gia Lâm"
            },{
                "id":10,
                "name":"Quận Hà Đông"
            },{
                "id":11,
                "name":"Quận Hai Bà Trưng"
            },{
                "id":12,
                "name":"Huyện Hoài Đức"
            },{
                "id":13,
                "name":"Quận Hoàn Kiếm"
            },{
                "id":14,
                "name":"Quận Hoàng Mai"
            },{
                "id":15,
                "name":"Quận Long Biên"
            },{
                "id":16,
                "name":"Huyện Mê Linh"
            },{
                "id":17,
                "name":"Huyện Mỹ Đức"
            },{
                "id":18,
                "name":"Quận Nam Từ Liêm"
            },{
                "id":19,
                "name":"Huyện Phú Xuyên"
            },{
                "id":20,
                "name":"Huyện Phúc Thọ"
            },{
                "id":21,
                "name":"Huyện Quốc Oai"
            },{
                "id":22,
                "name":"Huyện Sóc Sơn"
            },{
                "id":23,
                "name":"Thị xã Sơn Tây"
            },{
                "id":24,
                "name":"Quận Tây Hồ"
            },{
                "id":25,
                "name":"Huyện Thạch Thất"
            },{
                "id":26,
                "name":"Huyện Thanh Oai"
            },{
                "id":27,
                "name":"Huyện Thanh Trì"
            },{
                "id":28,
                "name":"Quận Thanh Xuân"
            },{
                "id":29,
                "name":"Huyện Thường Tín"
            },{
                "id":30,
                "name":"Huyện Ứng Hòa"
            }
        ]
    },
    {
        "id":3,
        "name":"Đà Nẵng",
        "district":[
            {
                "id":1,
                "name":"Quận Cẩm Lệ"
            },{
                "id":2,
                "name":"Quận Hải Châu"
            },{
                "id":3,
                "name":"Huyện Hòa Vang"
            },{
                "id":4,
                "name":"Huyện Hoàng Sa"
            },{
                "id":5,
                "name":"Quận Liên Chiểu"
            },{
                "id":6,
                "name":"Quận Ngũ Hành Sơn"
            },{
                "id":7,
                "name":"Quận Sơn Trà"
            },{
                "id":8,
                "name":"Quận Thanh Khê"
            }
        ]
    },
    {
        "id":4,
        "name":"Bình Dương",
        "district":[
            {
                "id":1,
                "name":"Huyện Bàu Bàng"
            },{
                "id":2,
                "name":"Thị xã Bến Cát"
            },{
                "id":3,
                "name":"Huyện Dầu Tiếng"
            },{
                "id":4,
                "name":"Thị xã Dĩ An"
            },{
                "id":5,
                "name":"Huyện Phú Giáo"
            },{
                "id":6,
                "name":"Huyện Tân Uyên"
            },{
                "id":7,
                "name":"Thị xã Thủ Dầu Một"
            },{
                "id":8,
                "name":"Huyện Thuận An"
            }
        ]
    },
    {
        "id":5,
        "name":"Đồng Nai",
        "district":[
            {
                "id":1,
                "name":"Thành phố Biên Hòa"
            },{
                "id":2,
                "name":"Huyện Cẩm Mỹ"
            },{
                "id":3,
                "name":"Huyện Định Quán"
            },{
                "id":4,
                "name":"Thị xã Long Khánh"
            },{
                "id":5,
                "name":"Huyện Long Thành"
            },{
                "id":6,
                "name":"Huyện Nhơn Trạch"
            },{
                "id":7,
                "name":"Quận Tân Phú"
            },{
                "id":8,
                "name":"Huyện Thống Nhất"
            },{
                "id":9,
                "name":"Huyện Trảng Bom"
            },{
                "id":10,
                "name":"Huyện Vĩnh Cửu"
            },{
                "id":11,
                "name":"Huyện Xuân Lộc"
            }
        ]
    },
    {
        "id":6,
        "name":"Khánh Hòa",
        "district":[
            {
                "id":1,
                "name":"Huyện Cam Lâm"
            },{
                "id":2,
                "name":"Thành phố Cam Ranh"
            },{
                "id":3,
                "name":"Huyện Diên Khánh"
            },{
                "id":4,
                "name":"Huyện Khánh Sơn"
            },{
                "id":5,
                "name":"Huyện Khánh Vĩnh"
            },{
                "id":6,
                "name":"Thành phố Nha Trang"
            },{
                "id":7,
                "name":"Thị xã Ninh Hòa"
            },{
                "id":8,
                "name":"Huyện Trường Sa"
            },{
                "id":9,
                "name":"Huyện Vạn Ninh"
            }
        ]
    },
    {
        "id":7,
        "name":"Hải Phòng",
        "district":[
            {
                "id":1,
                "name":"Huyện An Dương"
            },{
                "id":2,
                "name":"Huyện An Lão"
            },{
                "id":3,
                "name":"Huyện Bạch Long Vĩ"
            },{
                "id":4,
                "name":"Huyện Cát Hải"
            },{
                "id":5,
                "name":"Quận Đồ Sơn"
            },{
                "id":6,
                "name":"Quận Dương Kinh"
            },{
                "id":7,
                "name":"Quận Hải An"
            },{
                "id":8,
                "name":"Quận Hồng Bàng"
            },{
                "id":9,
                "name":"Quận Kiến An"
            },{
                "id":10,
                "name":"Huyện Kiến Thụy"
            },{
                "id":11,
                "name":"Quận Lê Chân"
            },{
                "id":12,
                "name":"Quận Ngô Quyền"
            },{
                "id":13,
                "name":"Huyện Thủy Nguyên"
            },{
                "id":14,
                "name":"Huyện Tiên Lãng"
            },{
                "id":15,
                "name":"Huyện Vĩnh Bảo"
            }
        ]
    },
    {
        "id":8,
        "name":"Long An",
        "district":[
            {
                "id":1,
                "name":"Huyện Bến Lức"
            },{
                "id":2,
                "name":"Huyện Cần Đước"
            },{
                "id":3,
                "name":"Huyện Cần Giuộc"
            },{
                "id":4,
                "name":"Huyện Châu Thành"
            },{
                "id":5,
                "name":"Huyện Đức Hòa"
            },{
                "id":6,
                "name":"Huyện Đức Huệ"
            },{
                "id":7,
                "name":"Thị xã Kiến Tường"
            },{
                "id":8,
                "name":"Huyện Mộc Hóa"
            },{
                "id":9,
                "name":"Thành phố Tân An"
            },{
                "id":10,
                "name":"Huyện Tân Hưng"
            },{
                "id":11,
                "name":"Huyện Tân Thạnh"
            },{
                "id":12,
                "name":"Huyện Tân Trụ"
            },{
                "id":13,
                "name":"Huyện Thạnh Hóa"
            },{
                "id":14,
                "name":"Huyện Thủ Thừa"
            },{
                "id":15,
                "name":"Huyện Vĩnh Hưng"
            }
        ]
    },
    {
        "id":9,
        "name":"Quảng Nam",
        "district":[
            {
                "id":1,
                "name":"Huyện Bắc Trà My"
            },{
                "id":2,
                "name":"Huyện Đại Lộc"
            },{
                "id":3,
                "name":"Huyện Điện Bàn"
            },{
                "id":4,
                "name":"Huyện Đông Giang"
            },{
                "id":5,
                "name":"Huyện Duy Xuyên"
            },{
                "id":6,
                "name":"Huyện Hiệp Đức"
            },{
                "id":7,
                "name":"Thành phố Hội An"
            },{
                "id":8,
                "name":"Huyện Nam Giang"
            },{
                "id":9,
                "name":"Huyện Nam Trà My"
            },{
                "id":10,
                "name":"Huyện Nông Sơn"
            },{
                "id":11,
                "name":"Huyện Núi Thành"
            },{
                "id":12,
                "name":"Huyện Phú Ninh"
            },{
                "id":13,
                "name":"Huyện Phước Sơn"
            },{
                "id":14,
                "name":"Huyện Quế Sơn"
            },{
                "id":15,
                "name":"Thành phố Tam Kỳ"
            },{
                "id":16,
                "name":"Huyện Tây Giang"
            },{
                "id":17,
                "name":"Huyện Thăng Bình"
            },{
                "id":18,
                "name":"Huyện Tiên Phước"
            }
        ]
    },
    {
        "id":10,
        "name":"Bà Rịa - Vũng Tàu",
        "district":[
            {
                "id":1,
                "name":"Thị xã Bà Rịa"
            },{
                "id":2,
                "name":"Huyện Châu Đức"
            },{
                "id":3,
                "name":"Huyện Côn Đảo"
            },{
                "id":4,
                "name":"Huyện Đất Đỏ"
            },{
                "id":5,
                "name":"Huyện Long Điền"
            },{
                "id":6,
                "name":"Huyện Tân Thành"
            },{
                "id":7,
                "name":"Thành phố Vũng Tàu"
            },{
                "id":8,
                "name":"Huyện Xuyên Mộc"
            }
        ]
    },
    {
        "id":11,
        "name":"Đắk Lắk",
        "district":[
            {
                "id":1,
                "name":"Huyện Buôn Đôn"
            },{
                "id":2,
                "name":"Thị xã Buôn Hồ"
            },{
                "id":3,
                "name":"Thành phố Buôn Ma Thuột"
            },{
                "id":4,
                "name":"Huyện Cư Kuin"
            },{
                "id":5,
                "name":"Huyện Cư M/'gar'"
            },{
                "id":6,
                "name":"Huyện Ea H/'Leo'"
            },{
                "id":7,
                "name":"Huyện Ea Kar"
            },{
                "id":8,
                "name":"Huyện Ea Súp"
            },{
                "id":9,
                "name":"Huyện Krông Ana"
            },{
                "id":10,
                "name":"Huyện Krông Bông"
            },{
                "id":11,
                "name":"Huyện Krông Buk"
            },{
                "id":12,
                "name":"Huyện Krông Năng"
            },{
                "id":13,
                "name":"Huyện Krông Pắc"
            },{
                "id":14,
                "name":"Huyện Lăk"
            },{
                "id":15,
                "name":"Huyện M/'Đrăk'"
            }
        ]
    },
    {
        "id":12,
        "name":"Cần Thơ",
        "district":[
            {
                "id":1,
                "name":"Huyện Thới Lai"
            },{
                "id":2,
                "name":"Quận Bình Thủy"
            },{
                "id":3,
                "name":"Quận Cái Răng"
            },{
                "id":4,
                "name":"Huyện Cờ Đỏ"
            },{
                "id":5,
                "name":"Quận Ninh Kiều"
            },{
                "id":6,
                "name":"Quận Ô Môn"
            },{
                "id":7,
                "name":"Huyện Phong Điền"
            },{
                "id":8,
                "name":"Quận Thốt Nốt"
            },{
                "id":9,
                "name":"Huyện Vĩnh Thạnh"
            }
        ]
    },
    {
        "id":13,
        "name":"Bình Thuận",
        "district":[
            {
                "id":1,
                "name":"Huyện Bắc Bình"
            },{
                "id":2,
                "name":"Huyện Đảo Phú Quý"
            },{
                "id":3,
                "name":"Huyện Đức Linh"
            },{
                "id":4,
                "name":"Huyện Hàm Tân"
            },{
                "id":5,
                "name":"Huyện Hàm Thuận Bắc"
            },{
                "id":6,
                "name":"Huyện Hàm Thuận Nam"
            },{
                "id":7,
                "name":"Thị xã La Gi"
            },{
                "id":8,
                "name":"Thành phố Phan Thiết"
            },{
                "id":9,
                "name":"Huyện Tánh Linh"
            },{
                "id":10,
                "name":"Huyện Tuy Phong"
            }
        ]
    },
    {
        "id":14,
        "name":"Lâm Đồng",
        "district":[
            {
                "id":1,
                "name":"Huyện Bảo Lâm"
            },{
                "id":2,
                "name":"Thành phố Bảo Lộc"
            },{
                "id":3,
                "name":"Huyện Cát Tiên"
            },{
                "id":4,
                "name":"Huyện Đạ Huoai"
            },{
                "id":5,
                "name":"Thành phố Đà Lạt"
            },{
                "id":6,
                "name":"Huyện Đạ Tẻh"
            },{
                "id":7,
                "name":"Huyện Đam Rông"
            },{
                "id":8,
                "name":"Huyện Di Linh"
            },{
                "id":9,
                "name":"Huyện Đơn Dương"
            },{
                "id":10,
                "name":"Huyện Đức Trọng"
            },{
                "id":11,
                "name":"Huyện Lạc Dương"
            },{
                "id":12,
                "name":"Huyện Lầm Hà"
            }
        ]
    },
    {
        "id":15,
        "name":"Thừa Thiên Huế",
        "district":[
            {
                "id":1,
                "name":"Huyện A Lưới"
            },{
                "id":2,
                "name":"Thành phố Huế"
            },{
                "id":3,
                "name":"Thị xã Hương Thủy"
            },{
                "id":4,
                "name":"Huyện Hương Trà"
            },{
                "id":5,
                "name":"Huyện Nam Đông"
            },{
                "id":6,
                "name":"Huyện Phong Điền"
            },{
                "id":7,
                "name":"Huyện Phú Lộc"
            },{
                "id":8,
                "name":"Huyện Phú Vang"
            },{
                "id":9,
                "name":"Huyện Quảng Điền"
            }
        ]
    },
    {
        "id":16,
        "name":"Kiên Giang",
        "district":[
            {
                "id":1,
                "name":"Huyện An Biên"
            },{
                "id":2,
                "name":"Huyện An Minh"
            },{
                "id":3,
                "name":"Huyện Châu Thành"
            },{
                "id":4,
                "name":"Huyện Giang Thành"
            },{
                "id":5,
                "name":"Huyện Giồng Riềng"
            },{
                "id":6,
                "name":"Huyện Gò Quao"
            },{
                "id":7,
                "name":"Thị xã Hà Tiên"
            },{
                "id":8,
                "name":"Huyện Hòn Đất"
            },{
                "id":9,
                "name":"Huyện Kiên Hải"
            },{
                "id":10,
                "name":"Huyện Kiên Lương"
            },{
                "id":11,
                "name":"Huyện Phú Quốc"
            },{
                "id":12,
                "name":"Thành phố Rạch Giá"
            },{
                "id":13,
                "name":"Huyện Tân Hiệp"
            },{
                "id":14,
                "name":"Huyện U Minh Thượng"
            },{
                "id":15,
                "name":"Huyện Vĩnh Thuận"
            }
        ]
    },
    {
        "id":17,
        "name":"Bắc Ninh",
        "district":[
            {
                "id":1,
                "name":"Thành phố Bắc Ninh"
            },{
                "id":2,
                "name":"Huyện Gia Bình"
            },{
                "id":3,
                "name":"Huyện Lương Tài"
            },{
                "id":4,
                "name":"Huyện Quế Võ"
            },{
                "id":5,
                "name":"Huyện Thuận Thành"
            },{
                "id":6,
                "name":"Huyện Tiên Du"
            },{
                "id":7,
                "name":"Thị xã Từ Sơn"
            },{
                "id":8,
                "name":"Huyện Yên Phong"
            }
        ]
    },
    {
        "id":18,
        "name":"Quảng Ninh",
        "district":[
            {
                "id":1,
                "name":"Huyện Ba Chẽ"
            },{
                "id":2,
                "name":"Huyện Bình Liêu"
            },{
                "id":3,
                "name":"Thành phố Cẩm Phả"
            },{
                "id":4,
                "name":"Huyện Cô Tô"
            },{
                "id":5,
                "name":"Huyện Đầm Hà"
            },{
                "id":6,
                "name":"Huyện Đông Triều"
            },{
                "id":7,
                "name":"Thành phố Hạ Long"
            },{
                "id":8,
                "name":"Huyện Hải Hà"
            },{
                "id":9,
                "name":"Huyện Hoành Bồ"
            },{
                "id":10,
                "name":"Thành phố Móng Cái"
            },{
                "id":11,
                "name":"Huyện Quảng Yên"
            },{
                "id":12,
                "name":"Huyện Tiên Yên"
            },{
                "id":13,
                "name":"Thị xã Uông Bí"
            },{
                "id":14,
                "name":"Huyện Vân Đồn"
            }
        ]
    },
    {
        "id":19,
        "name":"Thanh Hóa",
        "district":[
            {
                "id":1,
                "name":"Huyện Bá Thước"
            },{
                "id":2,
                "name":"Thị xã Bỉm Sơn"
            },{
                "id":3,
                "name":"Huyện Cẩm Thủy"
            },{
                "id":4,
                "name":"Huyện Đông Sơn"
            },{
                "id":5,
                "name":"Huyện Hà Trung"
            },{
                "id":6,
                "name":"Huyện Hậu Lộc"
            },{
                "id":7,
                "name":"Huyện Hoằng Hóa"
            },{
                "id":8,
                "name":"Huyện Lang Chánh"
            },{
                "id":9,
                "name":"Huyện Mường Lát"
            },{
                "id":10,
                "name":"Huyện Nga Sơn"
            },{
                "id":11,
                "name":"Huyện Ngọc Lặc"
            },{
                "id":12,
                "name":"Huyện Như Thanh"
            },{
                "id":13,
                "name":"Huyện Như Xuân"
            },{
                "id":14,
                "name":"Huyện Nông Cống"
            },{
                "id":15,
                "name":"Huyện Quan Hóa"
            },{
                "id":16,
                "name":"Huyện Quan Sơn"
            },{
                "id":17,
                "name":"Huyện Quảng Xương"
            },{
                "id":18,
                "name":"Thị xã Sầm Sơn"
            },{
                "id":19,
                "name":"Huyện Thạch Thành"
            },{
                "id":20,
                "name":"Thành phố Thanh Hóa"
            },{
                "id":21,
                "name":"Huyện Thiệu Hóa"
            },{
                "id":22,
                "name":"Huyện Thọ Xuân"
            },{
                "id":23,
                "name":"Huyện Thường Xuân"
            },{
                "id":24,
                "name":"Huyện Tĩnh Gia"
            },{
                "id":25,
                "name":"Huyện Triệu Sơn"
            },{
                "id":26,
                "name":"Huyện Vĩnh Lộc"
            },{
                "id":27,
                "name":"Huyện Yên Định"
            }
        ]
    },
    {
        "id":20,
        "name":"Nghệ An",
        "district":[
            {
                "id":1,
                "name":"Huyện Anh Sơn"
            },{
                "id":2,
                "name":"Huyện Con Cuông"
            },{
                "id":3,
                "name":"Thị xã Cửa Lò"
            },{
                "id":4,
                "name":"Huyện Diễn Châu"
            },{
                "id":5,
                "name":"Huyện Đô Lương"
            },{
                "id":6,
                "name":"Thị xã Hoàng Mai"
            },{
                "id":7,
                "name":"Huyện Hưng Nguyên"
            },{
                "id":8,
                "name":"Huyện Kỳ Sơn"
            },{
                "id":9,
                "name":"Huyện Nam Đàn"
            },{
                "id":10,
                "name":"Huyện Nghi Lộc"
            },{
                "id":11,
                "name":"Huyện Nghĩa Đàn"
            },{
                "id":12,
                "name":"Huyện Quế Phong"
            },{
                "id":13,
                "name":"Huyện Quỳ Châu"
            },{
                "id":14,
                "name":"Huyện Quỳ Hợp"
            },{
                "id":15,
                "name":"Huyện Quỳnh Lưu"
            },{
                "id":16,
                "name":"Huyện Tân Kỳ"
            },{
                "id":17,
                "name":"Thị xã Thái Hòa"
            },{
                "id":18,
                "name":"Huyện Thanh Chương"
            },{
                "id":19,
                "name":"Huyện Tương Dương"
            },{
                "id":20,
                "name":"Thành phố Vinh"
            },{
                "id":21,
                "name":"Huyện Yên Thành"
            }
        ]

    },
    {
        "id":21,
        "name":"Hải Dương",
        "district":[
            {
                "id":1,
                "name":"Huyện Bình Giang"
            },{
                "id":2,
                "name":"Huyện Cẩm Giàng"
            },{
                "id":3,
                "name":"Thị xã Chí Linh"
            },{
                "id":4,
                "name":"Huyện Gia Lộc"
            },{
                "id":5,
                "name":"Thành phố Hải Dương"
            },{
                "id":6,
                "name":"Huyện Kim Thành"
            },{
                "id":7,
                "name":"Huyện Kinh Môn"
            },{
                "id":8,
                "name":"Huyện Nam Sách"
            },{
                "id":9,
                "name":"Huyện Ninh Giang"
            },{
                "id":10,
                "name":"Huyện Thanh Hà"
            },{
                "id":11,
                "name":"Huyện Thanh Miện"
            },{
                "id":12,
                "name":"Huyện Tứ Kỳ"
            }
        ]
    },
    {
        "id":22,
        "name":"Gia Lai",
        "district":[
            {
                "id":1,
                "name":"Thị xã An Khê"
            },{
                "id":2,
                "name":"Thị xã AYun Pa"
            },{
                "id":3,
                "name":"Huyện Chư Păh"
            },{
                "id":4,
                "name":"Huyện Chư Pưh"
            },{
                "id":5,
                "name":"Huyện Chư Sê"
            },{
                "id":6,
                "name":"Huyện ChưPRông"
            },{
                "id":7,
                "name":"Huyện Đăk Đoa"
            },{
                "id":8,
                "name":"Huyện Đăk Pơ"
            },{
                "id":9,
                "name":"Huyện Đức Cơ"
            },{
                "id":10,
                "name":"Huyện Ia Grai"
            },{
                "id":11,
                "name":"Huyện Ia Pa"
            },{
                "id":12,
                "name":"Huyện KBang"
            },{
                "id":13,
                "name":"Huyện Kông Chro"
            },{
                "id":14,
                "name":"Huyện Krông Pa"
            },{
                "id":15,
                "name":"Huyện Mang Yang"
            },{
                "id":16,
                "name":"Huyện Phú Thiện"
            },{
                "id":17,
                "name":"Thành phố Plei ku"
            }
        ]
    },
    {
        "id":23,
        "name":"Bình Phước",
        "district":[
            {
                "id":1,
                "name":"Thị xã Bình Long"
            },{
                "id":2,
                "name":"Huyện Bù Đăng"
            },{
                "id":3,
                "name":"Huyện Bù Đốp"
            },{
                "id":4,
                "name":"Huyện Bù Gia Mập"
            },{
                "id":5,
                "name":"Huyện Chơn Thành"
            },{
                "id":6,
                "name":"Huyện Đồng Phú"
            },{
                "id":7,
                "name":"Huyện Đồng Xoài"
            },{
                "id":8,
                "name":"Huyện Hớn Quản"
            },{
                "id":9,
                "name":"Huyện Lộc Ninh"
            },{
                "id":10,
                "name":"Huyện Phú Riềng"
            },{
                "id":11,
                "name":"Thị xã Phước Long"
            }
        ]
    },
    {
        "id":24,
        "name":"Hưng Yên",
        "district":[
            {
                "id":1,
                "name":"Huyện Ân Thi"
            },{
                "id":2,
                "name":"Thành phố Hưng Yên"
            },{
                "id":3,
                "name":"Huyện Khoái Châu"
            },{
                "id":4,
                "name":"Huyện Kim Động"
            },{
                "id":5,
                "name":"Huyện Mỹ Hào"
            },{
                "id":6,
                "name":"Huyện Phù Cừ"
            },{
                "id":7,
                "name":"Huyện Tiên Lữ"
            },{
                "id":8,
                "name":"Huyện Văn Giang"
            },{
                "id":9,
                "name":"Huyện Văn Lâm"
            },{
                "id":10,
                "name":"Huyện Yên Mỹ"
            }
        ]
    },
    {
        "id":25,
        "name":"Bình Định",
        "district":[
            {
                "id":1,
                "name":"Huyện An Lão"
            },{
                "id":2,
                "name":"Huyện An Nhơn"
            },{
                "id":3,
                "name":"Huyện Hoài Ân"
            },{
                "id":4,
                "name":"Huyện Hoài Nhơn"
            },{
                "id":5,
                "name":"Huyện Phù Cát"
            },{
                "id":6,
                "name":"Huyện Phù Mỹ"
            },{
                "id":7,
                "name":"Thành phố Quy Nhơn"
            },{
                "id":8,
                "name":"Huyện Tây Sơn"
            },{
                "id":9,
                "name":"Huyện Tuy Phước"
            },{
                "id":10,
                "name":"Huyện Vân Canh"
            },
            {
                "id":11,
                "name":"Huyện Vĩnh Thạnh"
            }
        ]
    },
    {
        "id":26,
        "name":"Tiền Giang",
        "district":[
            {
                "id":1,
                "name":"Huyện Cái Bèh"
            },{
                "id":2,
                "name":"Thị xã Cai Lậy"
            },{
                "id":3,
                "name":"Huyện Châu Thành"
            },{
                "id":4,
                "name":"Huyện Chợ Gạo"
            },{
                "id":5,
                "name":"Thị xã Gò Công"
            },{
                "id":6,
                "name":"Huyện Gò Công Đông"
            },{
                "id":7,
                "name":"Huyện Gò Công Tây"
            },{
                "id":8,
                "name":"Huyện Cai Lậy"
            },{
                "id":9,
                "name":"Thành phố Mỹ Tho"
            },{
                "id":10,
                "name":"Huyện Tân Phú Đông"
            },{
                "id":11,
                "name":"Huyện Tân Phước"
            }
        ]
    },
    {
        "id":27,
        "name":"Thái Bình",
        "district":[
            {
                "id":1,
                "name":"Huyện Đông Hưng"
            },{
                "id":2,
                "name":"Huyện Hưng Hà"
            },{
                "id":3,
                "name":"Huyện Kiến Xương"
            },{
                "id":4,
                "name":"Huyện Quỳnh Phụ"
            },{
                "id":5,
                "name":"Thành phố Thái Bình"
            },{
                "id":6,
                "name":"Huyện Thái Thụy"
            },{
                "id":7,
                "name":"Huyện Tiền Hải"
            },{
                "id":8,
                "name":"Huyện Vũ Thư"
            }
        ]
    },
    {
        "id":28,
        "name":"Bắc Giang",
        "district":[
            {
                "id":1,
                "name":"Thành phố Bắc Giang"
            },{
                "id":2,
                "name":"Huyện Hiệp Hòa"
            },{
                "id":3,
                "name":"Huyện Lạng Giang"
            },{
                "id":4,
                "name":"Huyện Lục Nam"
            },{
                "id":5,
                "name":"Huyện Lục Ngạn"
            },{
                "id":6,
                "name":"Huyện Sơn Động"
            },{
                "id":7,
                "name":"Huyện Tân Yên"
            },{
                "id":8,
                "name":"Huyện Việt Yên"
            },{
                "id":9,
                "name":"Huyện Yên Dũng"
            },{
                "id":10,
                "name":"Huyện Yên Thế"
            }
        ]
    },
    {
        "id":29,
        "name":"Hòa Bình",
        "district":[
            {
                "id":1,
                "name":"Huyện Cao Phong"
            },{
                "id":2,
                "name":"Huyện Đà Bắc"
            },{
                "id":3,
                "name":"Thành phố Hòa Bình"
            },{
                "id":4,
                "name":"Huyện Kim Bôi"
            },{
                "id":5,
                "name":"Huyện Kỳ Sơn"
            },{
                "id":6,
                "name":"Huyện Lạc Sơn"
            },{
                "id":7,
                "name":"Huyện Lạc Thủy"
            },{
                "id":8,
                "name":"Huyện Lương Sơn"
            },{
                "id":9,
                "name":"Huyện Mai Châu"
            },{
                "id":10,
                "name":"Huyện Tân Lạc"
            },{
                "id":11,
                "name":"Huyện Yên Thủy"
            }
        ]
    },
    {
        "id":30,
        "name":"An Giang",
        "district":[
            {
                "id":1,
                "name":"Huyện An Phú"
            },{
                "id":2,
                "name":"Thị xã Châu Đốc"
            },{
                "id":3,
                "name":"Huyện Châu Phú"
            },{
                "id":4,
                "name":"Huyện Châu Thành"
            },{
                "id":5,
                "name":"Huyện Chợ Mới"
            },{
                "id":6,
                "name":"Thành phố Long Xuyên"
            },{
                "id":7,
                "name":"Huyện Phú Tân"
            },{
                "id":8,
                "name":"Thị xã Tân Châu"
            },{
                "id":9,
                "name":"Huyện Thoại Sơn"
            },{
                "id":10,
                "name":"Huyện Tịnh Biên"
            },{
                "id":11,
                "name":"Huyện Tri Tôn"
            }
        ]
    },
    {
        "id":31,
        "name":"Vĩnh Phúc",
        "district":[
            {
                "id":1,
                "name":"Huyện Bình Xuyên"
            },{
                "id":2,
                "name":"Huyện Lập Thạch"
            },{
                "id":3,
                "name":"Thị xã Phúc Yên"
            },{
                "id":4,
                "name":"Huyện Sông Lô"
            },{
                "id":5,
                "name":"Huyện Tam Đảo"
            },{
                "id":6,
                "name":"Huyện Tam Dương"
            },{
                "id":7,
                "name":"Huyện Vĩnh Tường"
            },{
                "id":8,
                "name":"Thành phố Vĩnh Yên"
            },{
                "id":9,
                "name":"Huyện Yên Lạc"
            }
        ]
    },
    {
        "id":32,
        "name":"Tây Ninh",
        "district":[
            {
                "id":1,
                "name":"Huyện Bến Cầu"
            },{
                "id":2,
                "name":"Huyện Châu Thành"
            },{
                "id":3,
                "name":"Huyện Dương Minh Châu"
            },{
                "id":4,
                "name":"Huyện Gò Dầu"
            },{
                "id":5,
                "name":"Huyện Hòa Thành"
            },{
                "id":6,
                "name":"Huyện Tân Biên"
            },{
                "id":7,
                "name":"Huyện Tân Châu"
            },{
                "id":8,
                "name":"Thị xã Tây Ninh"
            },{
                "id":9,
                "name":"Huyện Trảng Bàng"
            }
        ]
    },
    {
        "id":33,
        "name":"Thái Nguyên",
        "district":[
            {
                "id":1,
                "name":"Huyện Đại Từ"
            },{
                "id":2,
                "name":"Huyện Định Hóa"
            },{
                "id":3,
                "name":"Huyện Đồng Hỷ"
            },{
                "id":4,
                "name":"Huyện Phổ Yên"
            },{
                "id":5,
                "name":"Huyện Phú Bình"
            },{
                "id":6,
                "name":"Huyện Phú Lương"
            },{
                "id":7,
                "name":"Thị xã Sông Công"
            },{
                "id":8,
                "name":"Thành phố Thái Nguyên"
            },{
                "id":9,
                "name":"Huyện Võ Nhai"
            }
        ]
    },
    {
        "id":34,
        "name":"Lào Cai",
        "district":[
            {
                "id":1,
                "name":"Huyện Bắc Hà"
            },{
                "id":2,
                "name":"Huyện Bảo Thắng"
            },{
                "id":3,
                "name":"Huyện Bảo Yên"
            },{
                "id":4,
                "name":"Huyện Bát Xát"
            },{
                "id":5,
                "name":"Thành phố Lào Cai"
            },{
                "id":6,
                "name":"Huyện Mường Khương"
            },{
                "id":7,
                "name":"Huyện Sa Pa"
            },{
                "id":8,
                "name":"Huyện Văn Bàn"
            },{
                "id":9,
                "name":"Huyện Xi Ma Cai"
            }
        ]
    },
    {
        "id":35,
        "name":"Nam Định",
        "district":[
            {
                "id":1,
                "name":"Huyện Giao Thủy"
            },{
                "id":2,
                "name":"Huyện Hải Hậu"
            },{
                "id":3,
                "name":"Huyện Mỹ Lộcc"
            },{
                "id":4,
                "name":"Thành phố Nam Định"
            },{
                "id":5,
                "name":"Huyện Nam Trực"
            },{
                "id":6,
                "name":"Huyện Nghĩa Hưng"
            },{
                "id":7,
                "name":"Huyện Trực Ninh"
            },{
                "id":8,
                "name":"Huyện Vụ Bản"
            },{
                "id":9,
                "name":"Huyện Xuân Trường"
            },{
                "id":10,
                "name":"Huyện Ý Yên"
            }
        ]
    },
    {
        "id":36,
        "name":"Quảng Ngãi",
        "district":[
            {
                "id":1,
                "name":"Huyện Ba Tơ"
            },{
                "id":2,
                "name":"Huyện Bình Sơn"
            },{
                "id":3,
                "name":"Huyện Đức Phổ"
            },{
                "id":4,
                "name":"Huyện Lý Sơn"
            },{
                "id":5,
                "name":"Huyện Minh Long"
            },{
                "id":6,
                "name":"Huyện Mộ Đức"
            },{
                "id":7,
                "name":"Huyện Nghĩa Hành"
            },{
                "id":8,
                "name":"Thành phố Quảng Ngãi"
            },{
                "id":9,
                "name":"Huyện Sơn Hà"
            },{
                "id":10,
                "name":"Huyện Sơn Tây"
            },{
                "id":11,
                "name":"Huyện Sơn Tịnh"
            },{
                "id":12,
                "name":"Huyện Tây Trà"
            },{
                "id":13,
                "name":"Huyện Trà Bồng"
            },{
                "id":14,
                "name":"Huyện Tư Nghĩa"
            }
        ]
    },
    {
        "id":37,
        "name":"Bến Tre",
        "district":[
            {
                "id":1,
                "name":"Huyện Ba Tri"
            },{
                "id":2,
                "name":"Thành phố Bến Tre"
            },{
                "id":3,
                "name":"Huyện Bình Đại"
            },{
                "id":4,
                "name":"Huyện Châu Thành"
            },{
                "id":5,
                "name":"Huyện Chợ Lách"
            },{
                "id":6,
                "name":"Huyện Giồng Trôm"
            },{
                "id":7,
                "name":"Huyện Mỏ Cày Bắc"
            },{
                "id":8,
                "name":"Huyện Mỏ Cày Nam"
            },{
                "id":9,
                "name":"Huyện Thạnh Phú"
            }
        ]
    },
    {
        "id":38,
        "name":"Đăk Nông",
        "district":[
            {
                "id":1,
                "name":"Huyện Cư Jút"
            },{
                "id":2,
                "name":"Huyện Dăk GLong"
            },{
                "id":3,
                "name":"Huyện Dăk Mil"
            },{
                "id":4,
                "name":"Huyện Dăk R/'Lấp'"
            },{
                "id":5,
                "name":"Huyện Dăk Song"
            },{
                "id":6,
                "name":"Thị xã Gia Nghĩa"
            },{
                "id":7,
                "name":"Huyện Krông Nô"
            },{
                "id":8,
                "name":"Huyện Tuy Đức"
            }
        ]
    },
    {
        "id":39,
        "name":"Cà Mau",
        "district":[
            {
                "id":1,
                "name":"Thành phố Cà Mau"
            },{
                "id":2,
                "name":"Huyện Cái Nước"
            },{
                "id":3,
                "name":"Huyện Đầm Dơi"
            },{
                "id":4,
                "name":"Huyện Năm Căn"
            },{
                "id":5,
                "name":"Huyện Ngọc Hiển"
            },{
                "id":6,
                "name":"Huyện Phú Tân"
            },{
                "id":7,
                "name":"Huyện Thới Bình"
            },{
                "id":8,
                "name":"Huyện Trần Văn Thời"
            },{
                "id":9,
                "name":"Huyện U Minh"
            }
        ]
    },
    {
        "id":40,
        "name":"Vĩnh Long",
        "district":[
            {
                "id":1,
                "name":"Huyện Bình Minh"
            },{
                "id":2,
                "name":"Huyện Bình Tân"
            },{
                "id":3,
                "name":"Huyện Long Hồ"
            },{
                "id":4,
                "name":"Huyện Mang Thít"
            },{
                "id":5,
                "name":"Huyện Tam Bình"
            },{
                "id":6,
                "name":"Huyện Trà Ôn"
            },{
                "id":7,
                "name":"Thành phố Vĩnh Long"
            },{
                "id":8,
                "name":"Huyện Vũng Liêm"
            }
        ]
    },
    {
        "id":41,
        "name":"Ninh Bình",
        "district":[
            {
                "id":1,
                "name":"Huyện Gia Viễn"
            },{
                "id":2,
                "name":"Huyện Hoa Lư"
            },{
                "id":3,
                "name":"Huyện Kim Sơn"
            },{
                "id":4,
                "name":"Huyện Nho Quan"
            },{
                "id":5,
                "name":"Thành phố Ninh Bình"
            },{
                "id":6,
                "name":"Thị xã Tam Điệp"
            },{
                "id":7,
                "name":"Huyện Yên Khánh"
            },{
                "id":8,
                "name":"Huyện Yên Mô"
            }
        ]
    },
    {
        "id":42,
        "name":"Phú Thọ",
        "district":[
            {
                "id":1,
                "name":"Huyện Cẩm Khê"
            },{
                "id":2,
                "name":"Huyện Đoan Hùng"
            },{
                "id":3,
                "name":"Huyện Hạ Hòa"
            },{
                "id":4,
                "name":"Huyện Lâm Thao"
            },{
                "id":5,
                "name":"Huyện Phù Ninh"
            },{
                "id":6,
                "name":"Thị xã Phú Thọ"
            },{
                "id":7,
                "name":"Huyện Tam Nông"
            },{
                "id":8,
                "name":"Huyện Tân Sơn"
            },{
                "id":9,
                "name":"Huyện Thanh Ba"
            },{
                "id":10,
                "name":"Huyện Thanh Sơn"
            },{
                "id":11,
                "name":"Huyện Thanh Thủy"
            },{
                "id":12,
                "name":"Huyện Việt Trì"
            },{
                "id":13,
                "name":"Huyện Yên Lập"
            }
        ]
    },
    {
        "id":43,
        "name":"Ninh Thuận",
        "district":[
            {
                "id":1,
                "name":"Huyện Bác Ái"
            },{
                "id":2,
                "name":"Huyện Ninh Hải"
            },{
                "id":3,
                "name":"Huyện Ninh Phước"
            },{
                "id":4,
                "name":"Huyện Ninh Sơn"
            },{
                "id":5,
                "name":"Thành phố Phan Rang - Tháp Chàm"
            },{
                "id":6,
                "name":"Huyện Thuận Bắc"
            },{
                "id":7,
                "name":"Huyện Thuận Nam"
            }
        ]
    },
    {
        "id":44,
        "name":"Phú Yên",
        "district":[
            {
                "id":1,
                "name":"Huyện Đông Hòa"
            },{
                "id":2,
                "name":"Huyện Đồng Xuân"
            },{
                "id":3,
                "name":"Huyện Phú Hòa"
            },{
                "id":4,
                "name":"Huyện Sơn Hòa"
            },{
                "id":5,
                "name":"Thị xã Sông Cầu"
            },{
                "id":6,
                "name":"Huyện Sông Hinh"
            },{
                "id":7,
                "name":"Huyện Tây Hòa"
            },{
                "id":8,
                "name":"Huyện Tuy An"
            },{
                "id":9,
                "name":"Huyện Tuy Hòa"
            }
        ]
    },
    {
        "id":45,
        "name":"Hà Nam",
        "district":[
            {
                "id":1,
                "name":"Huyện Bình Lục"
            },{
                "id":2,
                "name":"Huyện Duy Tiên"
            },{
                "id":3,
                "name":"Huyện Kim Bảng"
            },{
                "id":4,
                "name":"Huyện Lý Nhân"
            },{
                "id":5,
                "name":"Thành phố Phủ Lý"
            },{
                "id":6,
                "name":"Huyện Thanh Liêm"
            }
        ]
    },
    {
        "id":46,
        "name":"Hà Tĩnh",
        "district":[
            {
                "id":1,
                "name":"Huyện Cẩm Xuyên"
            },{
                "id":2,
                "name":"Huyện Can Lộc"
            },{
                "id":3,
                "name":"Huyện Đức Thọ"
            },{
                "id":4,
                "name":"Thành phố Hà Tĩnh"
            },{
                "id":5,
                "name":"Thị xã Hồng Lĩnh"
            },{
                "id":6,
                "name":"Huyện Hương Khê"
            },{
                "id":7,
                "name":"Huyện Hương Sơn"
            },{
                "id":8,
                "name":"Huyện Kỳ Anh"
            },{
                "id":9,
                "name":"Huyện Lộc Hà"
            },{
                "id":10,
                "name":"Huyện Nghi Xuân"
            },{
                "id":11,
                "name":"Huyện Thạch Hà"
            },{
                "id":12,
                "name":"Huyện Vũ Quang"
            }
        ]
    },
    {
        "id":47,
        "name":"Đồng Tháp",
        "district":[
            {
                "id":1,
                "name":"Thành phố Cao Lãnh"
            },{
                "id":2,
                "name":"Huyện Châu Thành"
            },{
                "id":3,
                "name":"Thị xã Hồng Ngự"
            },{
                "id":4,
                "name":"Huyện Cao Lãnh"
            },{
                "id":5,
                "name":"Huyện Hồng Ngự"
            },{
                "id":6,
                "name":"Huyện Lai Vung"
            },{
                "id":7,
                "name":"Huyện Lấp Vò"
            },{
                "id":8,
                "name":"Huyện Sa Đéc"
            },{
                "id":9,
                "name":"Huyện Tam Nông"
            },{
                "id":10,
                "name":"Huyện Tân Hồng"
            },{
                "id":11,
                "name":"Huyện Thanh Bình"
            },{
                "id":12,
                "name":"Huyện Tháp Mười"
            }
        ]
    },
    {
        "id":48,
        "name":"Sóc Trăng",
        "district":[
            {
                "id":1,
                "name":"Huyện Châu Thành"
            },{
                "id":2,
                "name":"Huyện Cù Lao Dung"
            },{
                "id":3,
                "name":"Huyện Kế Sách"
            },{
                "id":4,
                "name":"Huyện Long Phú"
            },{
                "id":5,
                "name":"Huyện Mỹ Tú"
            },{
                "id":6,
                "name":"Huyện Mỹ Xuyên"
            },{
                "id":7,
                "name":"Huyện Ngã Năm"
            },{
                "id":8,
                "name":"Thành phố Sóc Trăng"
            },{
                "id":9,
                "name":"Huyện Thanh Trị"
            },{
                "id":10,
                "name":"Huyện Trần Đề"
            },{
                "id":11,
                "name":"Huyện Vĩnh Châu"
            }
        ]
    },
    {
        "id":49,
        "name":"Kon Tum",
        "district":[
            {
                "id":1,
                "name":"Huyện Đăk Glei"
            },{
                "id":2,
                "name":"Huyện Đăk Hà"
            },{
                "id":3,
                "name":"Huyện Đăk Tô"
            },{
                "id":4,
                "name":"Huyện Ia H/'Drai'"
            },{
                "id":5,
                "name":"Huyện Kon Plông"
            },{
                "id":6,
                "name":"Huyện Kon Rẫy"
            },{
                "id":7,
                "name":"Thành phố Kon Tum"
            },{
                "id":8,
                "name":"Huyện Ngọc Hồi"
            },{
                "id":9,
                "name":"Huyện Sa Thầy"
            },{
                "id":10,
                "name":"Huyện Tu Mơ Rông"
            }
        ]
    },
    {
        "id":50,
        "name":"Quảng Bình",
        "district": [
            {
                "id":1,
                "name":"Thị xã Ba Đồn"
            },{
                "id":2,
                "name":"Huyện Bố Trạch"
            },{
                "id":3,
                "name":"Thành phố Đồng Hới"
            },{
                "id":4,
                "name":"Huyện Lệ Thủy"
            },{
                "id":5,
                "name":"Huyện Minh Hóa"
            },{
                "id":6,
                "name":"Huyện Quảng Ninh"
            },{
                "id":7,
                "name":"Huyện Quảng Trạch"
            },{
                "id":8,
                "name":"Huyện Tuyên Hóa"
            }
        ]
    },
    {
        "id":51,
        "name":"Quảng Trị",
        "district":[
            {
                "id":1,
                "name":"Huyện Cam Lộ"
            },{
                "id":2,
                "name":"Huyện Đa Krông"
            },{
                "id":3,
                "name":"Huyện Đảo Cồn Cỏ"
            },{
                "id":4,
                "name":"Thành phố Đông Hà"
            },{
                "id":5,
                "name":"Huyện Gio Linh"
            },{
                "id":6,
                "name":"Huyện Hải Lăng"
            },{
                "id":7,
                "name":"Huyện Hướng Hóa"
            },{
                "id":8,
                "name":"Thị xã Quảng Trị"
            },{
                "id":9,
                "name":"Huyện Triệu Phong"
            },{
                "id":10,
                "name":"Huyện Vĩnh Linh"
            }
        ]
    },
    {
        "id":52,
        "name":"Trà Vinh",
        "district":[
            {
                "id":1,
                "name":"Huyện Càng Long"
            },{
                "id":2,
                "name":"Huyện Cầu Kè"
            },{
                "id":3,
                "name":"Huyện Cầu Ngang"
            },{
                "id":4,
                "name":"Huyện Châu Thành"
            },{
                "id":5,
                "name":"Huyện Duyên Hải"
            },{
                "id":6,
                "name":"Huyện Tiểu Cần"
            },{
                "id":7,
                "name":"Huyện Trà Cú"
            },{
                "id":8,
                "name":"Thành phố Trà Vinh"
            }
        ]
    },
    {
        "id":53,
        "name":"Hậu Giang",
        "district":[
            {
                "id":1,
                "name":"Huyện Châu Thành"
            },{
                "id":2,
                "name":"Huyện Châu Thành A"
            },{
                "id":3,
                "name":"Huyện Long Mỹ"
            },{
                "id":4,
                "name":"Thị xã Ngã Bảy"
            },{
                "id":5,
                "name":"Huyện Phụng Hiệp"
            },{
                "id":6,
                "name":"Thành phố Vị Thanh"
            },{
                "id":7,
                "name":"Huyện Vị Thủy"
            }
        ]
    },
    {
        "id":54,
        "name":"Sơn La",
        "district":[
            {
                "id":1,
                "name":"Huyện Bắc Yên"
            },{
                "id":2,
                "name":"Huyện Mai Sơn"
            },{
                "id":3,
                "name":"Huyện Mộc Châu"
            },{
                "id":4,
                "name":"Huyện Mường La"
            },{
                "id":5,
                "name":"Huyện Phù Yên"
            },{
                "id":6,
                "name":"Huyện Quỳnh Nhai"
            },{
                "id":7,
                "name":"Thành phố Sơn La"
            },{
                "id":8,
                "name":"Huyện Sông Mã"
            },{
                "id":9,
                "name":"Huyện Sốp Cộp"
            },{
                "id":10,
                "name":"Huyện Thuận Châu"
            },{
                "id":11,
                "name":"Huyện Vân Hồ"
            },{
                "id":12,
                "name":"Huyện Yên Châu"
            }
        ]
    },
    {
        "id":55,
        "name":"Bạc Liêu",
        "district":[
            {
                "id":1,
                "name":"Thành phố Bạc Liêu"
            },{
                "id":2,
                "name":"Huyện Đông Hải"
            },{
                "id":3,
                "name":"Huyện Giá Rai"
            },{
                "id":4,
                "name":"Huyện Hòa Bình"
            },{
                "id":5,
                "name":"Huyện Hồng Dân"
            },{
                "id":6,
                "name":"Huyện Phước Lợi"
            },{
                "id":7,
                "name":"Huyện Vĩnh Lợi"
            }
        ]
    },
    {
        "id":56,
        "name":"Yên Bái",
        "district":[
            {
                "id":1,
                "name":"Huyện Lục Yên"
            },{
                "id":2,
                "name":"Huyện Mù Cang Chải"
            },{
                "id":3,
                "name":"Thị xã Nghĩa Lộ"
            },{
                "id":4,
                "name":"Huyện Trạm Tấu"
            },{
                "id":5,
                "name":"Huyện Trấn Yên"
            },{
                "id":6,
                "name":"Huyện Văn Chấn"
            },{
                "id":7,
                "name":"Huyện Văn Yên"
            },{
                "id":8,
                "name":"Thành phố Yên Bái"
            },{
                "id":9,
                "name":"Huyện Yên Bình"
            }
        ]
    },
    {
        "id":57,
        "name":"Tuyên Quang",
        "district":[
            {
                "id":1,
                "name":"Huyện Chiêm Hóa"
            },{
                "id":2,
                "name":"Huyện Hàm Yên"
            },{
                "id":3,
                "name":"Huyện Lâm Bình"
            },{
                "id":4,
                "name":"Huyện Na Hang"
            },{
                "id":5,
                "name":"Huyện Sơn Dương"
            },{
                "id":6,
                "name":"Thành phố Tuyên Quang"
            },{
                "id":7,
                "name":"Huyện Yên Sơn"
            }
        ]
    },
    {
        "id":58,
        "name":"Điện Biên",
        "district":[
            {
                "id":1,
                "name":"Huyện Điện Biên"
            },{
                "id":2,
                "name":"Huyện Điện Biên Đông"
            },{
                "id":3,
                "name":"Thành phố Điện Biên Phủ"
            },{
                "id":4,
                "name":"Huyện Mường Ảng"
            },{
                "id":5,
                "name":"Huyện Mường Chà"
            },{
                "id":6,
                "name":"Huyện Mường Lay"
            },{
                "id":7,
                "name":"Huyện Mường Nhé"
            },{
                "id":8,
                "name":"Huyện Nậm Pồ"
            },{
                "id":9,
                "name":"Huyện Tủa Chùa"
            },{
                "id":10,
                "name":"Huyện Tuần Giáo"
            }
        ]
    },
    {
        "id":59,
        "name":"Lai Châu",
        "district":[
            {
                "id":1,
                "name":"Thị xã Lai Châu"
            },{
                "id":2,
                "name":"Huyện Mường Tè"
            },{
                "id":3,
                "name":"Huyện Nậm Nhùn"
            },{
                "id":4,
                "name":"Huyện Phong Thổ"
            },{
                "id":5,
                "name":"Huyện Sìn Hồ"
            },{
                "id":6,
                "name":"Huyện Tam Đường"
            },{
                "id":7,
                "name":"Huyện Tân Uyên"
            },{
                "id":8,
                "name":"Huyện Than Uyên"
            }
        ]
    },
    {
        "id":60,
        "name":"Lạng Sơn",
        "district":[
            {
                "id":1,
                "name":"Huyện Bắc Sơn"
            },{
                "id":2,
                "name":"Huyện Bình Gia"
            },{
                "id":3,
                "name":"Huyện Cao Lộc"
            },{
                "id":4,
                "name":"Huyện Chi Lăng"
            },{
                "id":5,
                "name":"Huyện Đình Lập"
            },{
                "id":6,
                "name":"Huyện Hữu Lũng"
            },{
                "id":7,
                "name":"Thành phố Lạng Sơn"
            },{
                "id":8,
                "name":"Huyện Lộc Bình"
            },{
                "id":9,
                "name":"Huyện Tràng Định"
            },{
                "id":10,
                "name":"Huyện Văn Lãng"
            },{
                "id":11,
                "name":"Huyện Văn Quan"
            }
        ]
    },
    {
        "id":61,
        "name":"Hà Giang",
        "district":[
            {
                "id":1,
                "name":"Huyện Bắc Mê"
            },{
                "id":2,
                "name":"Huyện Bắc Quang"
            },{
                "id":3,
                "name":"Thành phố Hà Giang"
            },{
                "id":4,
                "name":"Huyện Hoàng Su Phì"
            },{
                "id":5,
                "name":"Huyện Mèo Vạc"
            },{
                "id":6,
                "name":"Huyện Quản Bạ"
            },{
                "id":7,
                "name":"Huyện Quang Bình"
            },{
                "id":8,
                "name":"Huyện Vị Xuyên"
            },{
                "id":9,
                "name":"Huyện Xín Mần"
            },{
                "id":10,
                "name":"Huyện Yên Minh"
            }
        ]
    },
    {
        "id":62,
        "name":"Bắc Kạn",
        "district":[
            {
                "id":1,
                "name":"Huyện Ba Bể"
            },{
                "id":2,
                "name":"Thị xã Bắc Kạn"
            },{
                "id":3,
                "name":"Huyện Bạch Thông"
            },{
                "id":4,
                "name":"Huyện Chợ Đồn"
            },{
                "id":5,
                "name":"Huyện Chợ Mới"
            },{
                "id":6,
                "name":"Huyện Na Rì"
            },{
                "id":7,
                "name":"Huyện Ngân Sơn"
            },{
                "id":8,
                "name":"Huyện Pác Nặm"
            }
        ]
    },
    {
        "id":63,
        "name":"Cao Bằng",
        "district":[
            {
                "id":8,
                "name":"Huyện Bảo Lạc"
            },{
                "id":8,
                "name":"Huyện Bảo Lâm"
            },{
                "id":8,
                "name":"Thị xã Cao Bằng"
            },{
                "id":8,
                "name":"Huyện Hạ Lang"
            },{
                "id":8,
                "name":"Huyện Hà Quảng"
            },{
                "id":8,
                "name":"Huyện Hòa An"
            },{
                "id":8,
                "name":"Huyện Nguyên Bình"
            },{
                "id":8,
                "name":"Huyện Phục Hòa"
            },{
                "id":8,
                "name":"Huyện Quảng Uyên"
            },{
                "id":8,
                "name":"Huyện Thạch An"
            },{
                "id":8,
                "name":"Huyện Thông Nông"
            },{
                "id":8,
                "name":"Huyện Trà Lĩnh"
            },{
                "id":8,
                "name":"Huyện Trùng Khánh"
            }
        ]
    }
]
`