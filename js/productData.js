// 定义全局的产品数组
var products = [
    {
      id: 71,
      name: "阔型运动鞋",
      link: "/detail.html?product_id=71",
      category: "未分类",
      marketPrice: "6400.00",
      price: "6400.00",
      image: "https://pro487dab2a-pic12.ysjianzhan.cn/upload/eCom-757710WIA5V1142_F.jpg",
      description: "&lt;h1 ...&gt;阔型运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "block"
    },
    {
      id: 70,
      name: "【新品】男士驾车乐福鞋",
      link: "/detail.html?product_id=70",
      category: "主页  - 鞋履 -阔型运动鞋",
      marketPrice: "6400.00",
      price: "6400.00",
      image: "https://pro487dab2a-pic12.ysjianzhan.cn/upload/Large-808180WIAC49166_F.jpg",
      description: "&lt;h1 ...&gt;阔型复古运动鞋&lt;/h1&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      descriptionDisplay: "none"
    },
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
            <div class="imgloading" style="height:200px;width:148px;"></div>
            <a href="${product.link}" class="productlistid" productlistid="${product.id}">
              <img src="${product.image}" 
                   data-original="${product.image}" 
                   class="wp-product_list-thumbnail img_lazy_load" 
                   style="height:200px;width:150px;" 
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
  