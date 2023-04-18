  class SmoothScroll {
    constructor(links){
        this.linkElements = document.querySelectorAll(links);

        this.addClickEvent();
    } 

    handleClick(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        console.log(section.offsetTop);
        window.scrollTo({
            top:section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
            behavior : "smooth"
        });
    }

    addClickEvent (){
        this.linkElements.forEach(link => {
            link.addEventListener("click" , this.handleClick);
        });
    }
  }

  class activeSmoothScroll extends SmoothScroll{
    constructor(links , sections){
        super(links);

        this.handleScroll = this.handleScroll.bind(this);
        this.sectionElements = document.querySelectorAll(sections);
        this.activeNavScroll();
        this.handleScroll();
    }

    handleScroll(){
         this.sectionElements.forEach((section , i)=> {
            if (window.pageYOffset > section.offsetTop) {
                this.linkElements[i].classList.add("active");
            }
         });
    }

    activeNavScroll (){
        window.addEventListener("scroll" , this.handleScroll);
    }
  }

  const scroll = new SmoothScroll("a[href^='#']" , "section");

//   console.log(scroll.linkElements)