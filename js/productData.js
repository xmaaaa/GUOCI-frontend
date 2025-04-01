// 定义全局的产品数组
var products = [
    {
      id: 1,
      name: "Screener系列男士织带",
      link: "/detail.html?product_id=1",
      category: "主页 - 男鞋",
      marketPrice: "8500.00",
      price: "8500.00",
      image: "img/man shoes/Screener系列男士运动鞋3.webp",
      description: "&lt;h1 ...&gt;阔型运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "block"
    },
    {
      id: 2,
      name: "Screener系列男士运动鞋",
      link: "/detail.html?product_id=2",
      category: "主页  - 鞋履 -阔型运动鞋",
      marketPrice: "8500.00",
      price: "8500.00",
      image: "img/man shoes/Screener系列男士运动鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 3,
      name: "Screener系列男士运动鞋",
      link: "/detail.html?product_id=3",
      category: "主页  - 鞋履 -阔型运动鞋",
      marketPrice: "8500.00",
      price: "8500.00",
      image: "img/man shoes/Screener系列男士运动鞋2.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 4,
      name: "Screener系列男士运动鞋",
      link: "/detail.html?product_id=4",
      category: "主页  - 鞋履 -阔型运动鞋",
      marketPrice: "8500.00",
      price: "8500.00",
      image: "img/man shoes/Screener系列男士织带0.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 5,
      name: "Screener系列男士运动鞋",
      link: "/detail.html?product_id=5",
      category: "主页  - 鞋履 -阔型运动鞋",
      marketPrice: "8500.00",
      price: "8500.00",
      image: "img/man shoes/Screener系列男士运动鞋4.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 6,
      name: "Screener系列男士织带厚",
      link: "/detail.html?product_id=6",
      category: "主页  - 鞋履 - Screener系列",
      marketPrice: "8500.00",
      price: "8500.00",
      image: "img/man shoes/Screener系列男士织带厚5.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 7,
      name: "Re-web系列男士运动鞋",
      link: "/detail.html?product_id=7",
      category: "主页  - 鞋履 - Screener系列",
      marketPrice: "12000.00",
      price: "12000.00",
      image: "img/man shoes/Re-web系列男士运动鞋3.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 8,
      name: "Re-web系列男士运动鞋",
      link: "/detail.html?product_id=8",
      category: "主页  - 鞋履 - 阔型运动鞋",
      marketPrice: "12000.00",
      price: "12000.00",
      image: "img/man shoes/Re-web系列男士运动鞋2.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 9,
      name: "Re-web系列男士运动鞋",
      link: "/detail.html?product_id=9",
      category: "主页  - 鞋履 - 阔型运动鞋",
      marketPrice: "10400.00",
      price: "10400.00",
      image: "img/man shoes/Re-web系列男士运动鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 10,
      name: "jordaan系列牛皮乐福鞋",
      link: "/detail.html?product_id=10",
      category: "主页  - 鞋履 - 牛皮乐福鞋",
      marketPrice: "10400.00",
      price: "10400.00",
      image: "img/man shoes/jordaan系列牛皮乐福鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 11,
      name: "jordaan系列男士乐福鞋",
      link: "/detail.html?product_id=11",
      category: "主页  - 鞋履 - 牛皮乐福鞋",
      marketPrice: "12888.00",
      price: "12888.00",
      image: "img/man shoes/jordaan系列男士乐福鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 12,
      name: "G75运动鞋",
      link: "/detail.html?product_id=12",
      category: "主页  - 鞋履 - 阔型运动鞋",
      marketPrice: "12800.00",
      price: "12800.00",
      image: "img/man shoes/G75运动鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 13,
      name: "cub3d系列男士运动鞋",
      link: "/detail.html?product_id=13",
      category: "主页  - 鞋履 - 阔型运动鞋",
      marketPrice: "13000.00",
      price: "13000.00",
      image: "img/man shoes/cub3d系列男士运动鞋4.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 14,
      name: "cub3d系列男士运动鞋",
      link: "/detail.html?product_id=14",
      category: "主页  - 鞋履 - 阔型运动鞋",
      marketPrice: "15000.00",
      price: "15000.00",
      image: "img/man shoes/cub3d系列男士运动鞋3.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 15,
      name: "cub3d系列男士运动鞋",
      link: "/detail.html?product_id=15",
      category: "主页  - 鞋履 - 阔型运动鞋",
      marketPrice: "10400.00",
      price: "10400.00",
      image: "img/man shoes/cub3d系列男士运动鞋1.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 16,
      name: "cub3d系列男士运动鞋",
      link: "/detail.html?product_id=16",
      category: "主页  - 鞋履 - 阔型运动鞋",
      marketPrice: "10400.00",
      price: "10400.00",
      image: "img/man shoes/cub3d系列男士运动鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 17,
      name: "Ace系列男士织带运动鞋",
      link: "/detail.html?product_id=17",
      category: "主页  - 鞋履 - 织带运动鞋",
      marketPrice: "16000.00",
      price: "16000.00",
      image: "img/man shoes/Ace系列男士织带运动鞋4.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 18,
      name: "Ace系列男士织带运动鞋",
      link: "/detail.html?product_id=18",
      category: "主页  - 鞋履 - 织带运动鞋",
      marketPrice: "16000.00",
      price: "16000.00",
      image: "img/man shoes/Ace系列男士织带运动鞋3.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 19,
      name: "Ace系列男士织带运动鞋",
      link: "/detail.html?product_id=19",
      category: "主页  - 鞋履 - 织带运动鞋",
      marketPrice: "16000.00",
      price: "16000.00",
      image: "img/man shoes/Ace系列男士织带运动鞋2.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 20,
      name: "Ace系列男士织带运动鞋",
      link: "/detail.html?product_id=20",
      category: "主页  - 鞋履 - 织带运动鞋",
      marketPrice: "20000.00",
      price: "20000.00",
      image: "img/man shoes/Ace系列男士织带运动鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 21,
      name: "Signoria系列露跟浅口鞋",
      link: "/detail.html?product_id=21",
      category: "主页  - 鞋履 - 露跟浅口鞋",
      marketPrice: "16000.00",
      price: "16000.00",
      image: "img/women shoes/Signoria系列露跟浅口鞋1.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 22,
      name: "Signoria系列露跟浅口鞋",
      link: "/detail.html?product_id=22",
      category: "主页  - 鞋履 - 露跟浅口鞋",
      marketPrice: "18000.00",
      price: "18000.00",
      image: "img/women shoes/Signoria系列露跟浅口鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 23,
      name: "Re-Motion系列女士运动鞋",
      link: "/detail.html?product_id=23",
      category: "主页  - 鞋履 - 阔型运动鞋",
      marketPrice: "16000.00",
      price: "16000.00",
      image: "img/women shoes/Re-Motion系列女士运动鞋2.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 24,
      name: "Re-Motion系列女士运动鞋",
      link: "/detail.html?product_id=24",
      category: "主页  - 鞋履 - 阔型运动鞋",
      marketPrice: "26000.00",
      price: "26000.00",
      image: "img/women shoes/Re-Motion系列女士运动鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 25,
      name: "Horsebit系列女士芭蕾平底鞋",
      link: "/detail.html?product_id=25",
      category: "主页  - 鞋履 - 芭蕾平底鞋",
      marketPrice: "16000.00",
      price: "16000.00",
      image: "img/women shoes/Horsebit系列女士芭蕾平底鞋1.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 26,
      name: "Horsebit系列女士芭蕾平底鞋",
      link: "/detail.html?product_id=26",
      category: "主页  - 鞋履 - 芭蕾平底鞋",
      marketPrice: "16000.00",
      price: "16000.00",
      image: "img/women shoes/Horsebit系列女士芭蕾平底鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 27,
      name: "女士双G凉鞋",
      link: "/detail.html?product_id=27",
      category: "主页  - 鞋履 -凉鞋",
      marketPrice: "26000.00",
      price: "26000.00",
      image: "img/women shoes/女士双G凉鞋1.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 28,
      name: "女士双G凉鞋",
      link: "/detail.html?product_id=28",
      category: "主页  - 鞋履 - 凉鞋",
      marketPrice: "26000.00",
      price: "26000.00",
      image: "img/women shoes/女士双G凉鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 29,
      name: "女士坡跟穆勒鞋",
      link: "/detail.html?product_id=29",
      category: "主页  - 鞋履 - 穆勒鞋",
      marketPrice: "18000.00",
      price: "18000.00",
      image: "img/women shoes/女士坡跟穆勒鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
    {
      id: 30,
      name: "【新品】女士坡跟穆勒鞋",
      link: "/detail.html?product_id=30",
      category: "主页  - 鞋履 - 穆勒鞋",
      marketPrice: "18000.00",
      price: "18000.00",
      image: "img/women shoes/【新品】女士坡跟穆勒鞋.webp",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    }
    
    // ...更多产品
  ];
  
  // 渲染商品列表的函数（适用于列表页）
  function renderProductList() {
    var listContainer = document.getElementById("productList");
    var html = "";
  
    products.forEach(function (product, index) {
      // 设置每个 <li> 的内联样式
      var liStyle = "width:150px;margin-bottom:11px;";
      liStyle += (index === products.length - 1) ? "margin-right:0px;" : "margin-right:7px;";
  
      html += `
        <li class="wp-new-article-style_lis" style="${liStyle}">
          <div class="img" style="height:200px;width:150px;">
            <div class="imgloading" style="height:auto;width:148px;"></div>
            <a href="${product.link}" class="productlistid" productlistid="${product.id}">
              <img src="${product.image}" 
                   data-original="${product.image}" 
                   class="wp-product_list-thumbnail img_lazy_load" 
                   style="height:auto;width:150px;" 
                   alt="${product.name}"/>
            </a>
          </div>
          <div class="wp-new-article-style-c">
            <p class="title">
              <a href="${product.link}" class="productlistid" productlistid="${product.id}">${product.name}</a>
            </p>
            <p class="mcate">
              <span class="category">${product.category}</span>
            </p>
            <p class="wp-new-ar-pro-style-price listprice_f">
              <label class="list_price_f_title">市场价: </label>
              <span class="list_price_f">${product.marketPrice}</span>
            </p>
            <p class="wp-new-ar-pro-style-price price_f">
              <label class="price_f_title">价格: </label>
              <span class="price_f">${product.price}</span>
            </p>
            <p class="wp-new-ar-pro-style-sales sales_f">
              <label class="sales_f_title">销量:</label>
              <span class="sales_f_salesvolume"></span>
            </p>
            <div class="wp-new-ar-pro-style-description">
              <textarea style="display:${product.descriptionDisplay};">
                ${product.description}
              </textarea>
            </div>
          </div>
        </li>
      `;
    });
  
    listContainer.innerHTML = html;
  }
  
  // 当 DOM 加载完毕后自动渲染列表（适用于列表页）
  document.addEventListener("DOMContentLoaded", function(){
    // 如果页面存在用于展示产品列表的容器，则执行渲染
    if(document.getElementById("productList")){
      renderProductList();
    }
  });
  