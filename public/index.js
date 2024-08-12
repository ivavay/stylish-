async function ajax(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

const productIdsArray = []
function render(data) {
  let titles = document.querySelectorAll(".title");
  let card_images = document.querySelectorAll(".card-img");
  let prices = document.querySelectorAll(".price");
  let products = document.querySelectorAll(".product");
  window.productId;
  // set product item to display none initially
  products.forEach((product) => (product.style.display = "none"));
  // loop through product card
  console.log(data.data.length)
  let count = -1;
  data.data.forEach((item, index) => {
    if (index < products.length) {
      count++;
      titles[index].innerHTML = item.title;
      card_images[index].src = item.main_image;
      prices[index].innerHTML = `TWD. ${item.price}`;

      const productElement = document.getElementById(`product-${count}`);
      console.log(productElement)
      if (productElement) {
      window.productId = data.data[index].id;
      productElement.setAttribute('data-id', window.productId);
      productIdsArray.push(window.productId)
      }
      const colorElements = document.querySelectorAll(
        `#product-${index} .color`
      );
      colorElements.forEach((colorElement, colorIndex) => {
        if (colorIndex < item.colors.length) {
          colorElement.style.backgroundColor = `#${item.colors[colorIndex].code}`;
          colorElement.style.display = "block";
        } else {
          colorElement.style.display = "none";
        }
      });
      // display back to normal visibility
      products[index].style.display = "block";
      
    }
  });
  console.log(productIdsArray)
  let a = document.querySelectorAll("a.product-link");
    a.forEach((item, index) => {
      item.href = `product?id=${productIdsArray[index]}`;
    });
}

// w0p2 - retrieve categories of products
document.addEventListener("DOMContentLoaded", () => {
  let url;
  let productList = document.querySelector(".row");
  // get the URL of the current page
  const urlParams = new URLSearchParams(window.location.search);
  let resultError = document.querySelector(".result");
  
  function getProductId(data) {
    // TODO: write some code for getting selected id upon clicking on product
    productList.addEventListener("click", function (event) {
      console.log(event.target.closest(".product"));
      
      console.log("clicked!");
      console.log(window.productId);
      window.history.pushState(data, "", "product");
      // set url to one with id
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("id", window.productId);
      window.history.pushState({}, "", currentUrl);
    });
    console.log(window.productId)
  }

  // get query from input
  function getQuery() {
    let input = document.querySelector(".searchInput");
    let mobileInput = document.querySelector(".searchInputMobile");

    // ❗️only run if statement if input is display block (visible)
    let keyword = "keyword";
    if (input && window.getComputedStyle(input).display === "block") {
      keyword = input.value;
      console.log("Desktop input selected:", keyword);
      // input.value = '';
    } else if (mobileInput) {
      keyword = mobileInput.value;
      console.log("Mobile input selected:", keyword);
      // mobileInput.value = '';
    }
    // set the query
    urlParams.set("keyword", keyword);
    // allows the url to be updated with search query
    const newUrl = window.location.pathname + "?" + urlParams.toString();
    history.pushState(null, "", newUrl);

    return keyword;
  }
  // select .row to show error message
  let row = document.querySelector(".row");
  // search based on query input
  window.searchFunction = function performSearch(keyword) {
    const url = `https://api.appworks-school.tw/api/1.0/products/search?keyword=${keyword}`;
    console.log(`Fetching data from: ${url}`);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          render(data);

          if (resultError) {
            resultError.style.display = "none"; // hide error message if data is present
          }
        } else {
          throw new Error("No products found");
        }
      })
      .catch((error) => {
        if (resultError) {
          console.error("Error fetching data:", error);
          resultError.style.display = "block";
          resultError.textContent = `Sorry! There are no ${keyword} found.`;
          row.style.display = "none";
        }
      });
  };

  // retrieve the 'keyword' parameter
  const keyword = urlParams.get("keyword");
  let enterPressed = false;
  document
    .querySelectorAll(".searchInput, .searchInputMobile")
    .forEach((element) => {
      element.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          console.log("enter!");
          console.log(element);
          event.preventDefault();
          const keyword = getQuery(); // get the query
          console.log(keyword);
          // if enterPressed is false, set to true
          if (!enterPressed) {
            // first enter pressed
            enterPressed = true;
            console.log("pressed enter once");
          } else {
            // enterPressed is true, and second enter pressed
            enterPressed = false;
            console.log("pressed enter second time! and search!!");
            if (keyword) {
              searchFunction(keyword); // search!!!
            }
            // clear input
            document.querySelector(".searchInput").value = " ";
            document.querySelector(".searchInputMobile").value = " ";
          }
        }
      });
    });
  // this block of code ensures results are the same upon refresh after search
  window.onload = () => {
    const keyword = urlParams.get("keyword");
    if (keyword) {
      searchFunction(keyword);
    }
  };
  // retrieve the 'category' parameter
  let category = urlParams.get("category");

  // display the products associate with the cateogry
  if (category) {
    url = `https://api.appworks-school.tw/api/1.0/products/${category}`;
  } else {
    url = "https://api.appworks-school.tw/api/1.0/products/all";
  }
  // TODO: write logic for getting marketing campaign data here
  // select DOM elements
  let bannerImg = document.querySelector(".banner-img");
  let bannerText1 = document.querySelector(".banner-title1");
  let bannerText2 = document.querySelector(".banner-title2");
  let bannerText3 = document.querySelector(".banner-title3");
  let bannerSmall = document.querySelector(".banner-p");

  let marketingUrl = `https://api.appworks-school.tw/api/1.0/marketing/campaigns`;
  // fetch from the campaign url
  let allData;
  fetch(marketingUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      allData = data;
      processData(allData);
    })
    .catch((error) => {
      throw new Error(error);
    });

  // do logic handling of data here
  function processData(data) {
    if (category == "women") {
      bannerImg.src = data.data[0].picture;
      // split  text to line items in an array
      const lines = data.data[0].story.split("\r\n");
      // set banner text content
      bannerText1.textContent = lines[0];
      bannerText2.textContent = lines[1];
      bannerText3.textContent = lines[2];
      bannerSmall.textContent = lines[3];
    } else if (category == "men") {
      bannerImg.src = data.data[1].picture;
      // split  text to line items in an array
      const lines = data.data[1].story.split("\r\n");
      // set banner text content
      bannerText1.textContent = lines[0];
      bannerText2.textContent = lines[1];
      bannerText3.textContent = lines[2];
      bannerSmall.textContent = lines[3];
    } else if (category == "accessories") {
      bannerImg.src = data.data[2].picture;
      // split  text to line items in an array
      const lines = data.data[2].story.split("\r\n");
      // set banner text content
      bannerText1.textContent = lines[0];
      bannerText2.textContent = lines[1];
      bannerText3.textContent = lines[2];
      bannerSmall.textContent = lines[3];
    } else if (!category) {
      bannerImg.src = data.data[0].picture;
      // split  text to line items in an array
      const lines = data.data[0].story.split("\r\n");
      // set banner text content
      bannerText1.textContent = lines[0];
      bannerText2.textContent = lines[1];
      bannerText3.textContent = lines[2];
      bannerSmall.textContent = lines[3];
    }
  }
  // selecting the dot in the slide carousel
  let dot1 = document.querySelector(".dot-1");
  let dot2 = document.querySelector(".dot-2");
  let dot3 = document.querySelector(".dot-3");
  // put dots in an array
  const arrayDots = [];
  arrayDots.push(dot1);
  arrayDots.push(dot2);
  arrayDots.push(dot3);
  // listens to click on each dot and make sure only one active class is selected at all times
  dot1.addEventListener("click", async function () {
    if (!dot1.classList.contains("active")) {
      dot1.classList.add("active");
      dot2.classList.remove("active");
      dot3.classList.remove("active");
      console.log("dot 1 is clicked");
      category = "women";
      // console.log(category);
      await processData(allData);
    }
  });
  dot2.addEventListener("click", async function () {
    if (!dot2.classList.contains("active")) {
      dot2.classList.add("active");
      dot1.classList.remove("active");
      dot3.classList.remove("active");
      // console.log("dot 2 is clicked");
      category = "men";
      console.log(category);
      await processData(allData);
    }
  });
  dot3.addEventListener("click", async function () {
    if (!dot3.classList.contains("active")) {
      dot3.classList.add("active");
      dot1.classList.remove("active");
      dot2.classList.remove("active");
      console.log("dot 3 is clicked");
      category = "accessories";
      // console.log(category);
      await processData(allData);
    }
  });
  // automatically change to the next slide every 5 seconds
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  // set first dot to active initally
  dot1.classList.add("active");
  async function changeSlide() {
    if (dot1.classList.contains("active")) {
      dot1.classList.remove("active");
      dot2.classList.add("active");
      // console.log('dot 2 is logged');
      category = "men";
    } else if (dot2.classList.contains("active")) {
      dot2.classList.remove("active");
      dot3.classList.add("active");
      // console.log('dot 3 is logged');
      category = "accessories";
    } else if (dot3.classList.contains("active")) {
      dot3.classList.remove("active");
      dot1.classList.add("active");
      // console.log('dot 1 is logged');
      category = "women";
    }

    await processData(allData);

    slides[currentSlideIndex].classList.remove("active");
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add("active");
  }
  // setinterval
  setInterval(changeSlide, 5000);

  // making request
  ajax(url)
    .then((data) => {
      render(data);
      console.log(data);
      getProductId(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  // for creating products list with associated category tab + query
  const baseUrl = "https://stylish-46927.web.app/";
  const params = new URLSearchParams({ category, keyword });

  const link = document.getElementsByClassName("dynamicLink");
  // set the href attribute with the base URL and query parameters
  link.href = `${baseUrl}index.html${params.toString()}`;

  // w1p3 - toggle active class for search bar mobile
  let mobileSearchbar = document.querySelector(".search-img");
  let searchBar = document.querySelector(".mobile-input");

  mobileSearchbar.addEventListener("click", function () {
    searchBar.classList.toggle("active");
  });

  // w1p4 - infinite scrolling
  const contentContainer = document.querySelector(".row");
  let next_paging = 0;

  async function fetchContent(next_paging) {
    if (category) {
      url = `https://api.appworks-school.tw/api/1.0/products/${category}?paging=${
        next_paging + 1
      }`;
    } else {
      url = `https://api.appworks-school.tw/api/1.0/products/all?paging=${
        next_paging + 1
      }`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log("items per page: " + data.data.length);
      return data;
    } catch (error) {
      console.error("Error fetching content:", error);
      return [];
    }
  }

  // create new product cards as page scrolls
  let productCount = 5;
  function appendContent(data) {
    data.data.forEach((item, index) => {
      // add to product count, which will be the ID for each loaded product
      productCount++;
      console.log(productCount);
      // create a tags
      const aTag = document.createElement("a");
      aTag.classList.add("product-link")
      contentContainer.append(aTag)
      // create product item
      const div = document.createElement("div");
      div.classList.add("product");
      div.style.display = "block";
      aTag.appendChild(div);
      // create unique id for each product item
      // but it starts from 1 every time page loads to fetch more data
      // maybe set a global variable for product count and increase as more products are loaded?
      div.id = `product-${productCount}`;

      const productElement = document.getElementById(`product-${productCount}`);
      console.log(productElement)
      if (productElement) {
      window.productId = data.data[index].id;
      productElement.setAttribute('data-id', window.productId);
      productIdsArray.push(window.productId)
      }

      
      // create and append img
      const img = document.createElement("img");
      img.src = item.main_image;
      img.classList.add("card-img");
      div.appendChild(img);
      // create and append color collections
      const colors = document.createElement("div");
      colors.classList.add("colors");
      div.appendChild(colors);
      // create and append 3 color boxes using loop
      for (let i = 1; i <= 3; i++) {
        const color = document.createElement("div");
        color.classList.add("color");
        colors.append(color);
      }

      // TODO: foreach over each color in colors
      // select correctly! this part got me stuck for half a day
      const productContainer = document.getElementById(
        `product-${productCount}`
      );
      console.log(productContainer);
      const newColorElements = productContainer.querySelectorAll(".color");
      console.log(
        `selected ${newColorElements.length} color elements for #product-${productCount}:`
      );

      // index is the colors index
      newColorElements.forEach((element, index) => {
        if (index < item.colors.length) {
          // log to see what's wrong
          console.log("item.colors.length: " + item.colors.length);
          console.log("if works!");
          console.log("index: " + index);
          console.log("productCount: " + productCount);
          // set colors boxes to black for now
          element.style.backgroundColor = `#${item.colors[index].code}`;
          // status: right now the color boxes are loaded initially for first 6 products, but
          // upon scrolling, only the next 6 prodcuts' colors load, and the next scroll - none
          element.style.display = "block";
          // colors.appendChild(element)
          console.log(element);
        } else {
          console.log("else works!");
          element.style.display = "none";
        }
      });

      // create and append title
      const title = document.createElement("div");
      title.textContent = item.title;
      title.classList.add("title");
      div.appendChild(title);
      // create and append prices
      const price = document.createElement("div");
      price.textContent = `TWD. ${item.price}`;
      price.classList.add("price");
      div.appendChild(price);
      // create hrefs
      let a = document.querySelectorAll("a.product-link");
      a.forEach((item, index) => {
        item.href = `product?id=${productIdsArray[index]}`;
      });

    });
  }

  // loads more content as page scrolls
  async function loadMoreContent() {
    console.log("loading!!!");
    const newItems = await fetchContent(next_paging);
    appendContent(newItems);
    next_paging++;
    console.log("next_paging " + next_paging);
  }
  // deboucing - ensures only runs after 0.3 seconds has passed since last trigger
  let debounceTimeout;
  const debounceDelay = 300; // 0.3 seconds

  function handleScroll() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadMoreContent();
      }
    }, debounceDelay);
  }

  window.addEventListener("scroll", handleScroll);
});
