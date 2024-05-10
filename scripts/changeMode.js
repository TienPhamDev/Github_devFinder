const modeToggle = document.querySelector(".modeToggle")

    function changeToLightMode(){
      const searchBar = document.querySelector(".searchBar")
      const githubProfile = document.querySelector(".github-profile")
      const light = document.querySelector(".light")
      const dark = document.querySelector(".dark")
      const svgMoon = document.querySelector(".svgMoon")
      const svgSun = document.querySelector(".svgSun")
      const body = document.querySelector(".body")
      light.classList.toggle("hidden")
      dark.classList.toggle("hidden")
      svgMoon.classList.toggle("hidden")
      svgSun.classList.toggle("hidden")
      body.classList.toggle("light-mode")
      if(body.classList.contains("light-mode")){
        searchBar.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.3)"
        githubProfile.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.3)"
      } else {
        searchBar.style.boxShadow ="none"
        githubProfile.style.boxShadow ="none"
      }
    }
    modeToggle.addEventListener("click",changeToLightMode)