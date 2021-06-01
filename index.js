window.onload = function (){

  function updateSliderValue(value) {

    const pageViewsLabel = document.querySelector(".value-pageview");
    const pageView = document.querySelector(".pageview");
    const priceLabel = document.querySelector(".value-price .value");
    const inputTarget = document.querySelector(".range-slider")
    const progress = document.querySelector(".progress")
    const checkbox = document.querySelector(".checkbox")

    const plans = {
      1: {
        pageViews: 10,
        views: 'K',
        price: "8",
        inputBg: "0%"
      },

      2: {
        pageViews: 50,
        views: 'k',
        price: "12",
        inputBg: "25%" 
      },

      3: {
        pageViews: 100,
        views: 'K',
        price: "16",
        inputBg: "50%"
      },

      4: {
        pageViews: 150,
        views: 'K',
        price: "24",
        inputBg: "75%"
      },

      5: {
        pageViews: 1,
        views: 'M',
        price: "32",
        inputBg: "100%"
      }
    }

      // there is a plan with this value that was passed in the function
    if (plans[value] !== undefined) {
      // we keep this existing plan in a variable to make our life easier
      const plan = plans[value]
      // we make any changes we want to the selected plan
      pageViewsLabel.innerHTML = plan.pageViews;
      
      if (checkbox.checked) {
        priceLabel.innerHTML = plan.price * 0.25;
      } else {
        priceLabel.innerHTML = plan.price;
      }

      pageView.innerHTML = plan.views;
      progress.style.width = plan.inputBg


      checkbox.addEventListener('change', function (e) {
        if (e.target.checked) {
          priceLabel.innerHTML = plan.price * 0.25;
        }
        else {
          priceLabel.innerHTML = plan.price;
        }
      })

    }
  }

  updateSliderValue(3);
  

  document.querySelector(".range-slider").addEventListener('input', function(e) {
    updateSliderValue(e.target.value);
  })
}
