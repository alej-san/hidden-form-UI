import anime from "./node_modules/animejs/lib/anime.es.js";
class UserInterfaceForm {
    form = document.createElement("form");
    dom = document.querySelector("#base");
    constructor(config, UIItems) {
        this.form.id = config.id;
        this.dom.appendChild(this.form);
        let counter = 1;
        let elementsArray = [];
        config.elements.forEach(element => {
            let inputter = document.createElement("input");
            if (!("id" in element)) {
                inputter.id = element.type + counter;
                counter++;
            } else {
                inputter.id = element.id;
                inputter.value = element.value;
            }
            inputter.type = element.type;
            inputter.name = element.name;
            elementsArray.push(inputter);
            this.form.appendChild(inputter);
        });
        this.UICreator(UIItems, elementsArray);
    }
    UICreator(UIItems, formInput) {
        this.dom.appendChild(document.createElement("div"));
        this.dom.lastElementChild.id = UIItems.id;
        let counter = 1;
        UIItems.items.forEach((item, index) => {
            let creator = document.createElement("div");
            creator.id = item.id;
            creator.className = item.class;
            this.dom.lastElementChild.appendChild(creator);
            if (item.id == "progress") {
                item.progress.forEach(element => {
                    let inputter;
                    if (element.id == "bar") {
                        inputter = document.createElement("progress");
                        inputter.max = element.max;
                        inputter.value = element.value;
                    }
                    else {
                        inputter = document.createElement("div");
                        inputter.innerHTML = element.value;
                    }
                    inputter.id = element.id;
                    document.querySelector("#progress").appendChild(inputter);
                    if ("content" in element) {
                        inputter.addEventListener("click", () => {
                            let barval = document.querySelector("#bar");
                            if (element.content > 0) {
                                barval.value += 10;
                            } else {
                                barval.value -= 10;
                            }
                            document.querySelector("#text").innerHTML = barval.value;
                            formInput[index].value = barval.value
                        });
                    }
                })
            }
            if (item.id == "selectors") {
                item.selectors.forEach((element, index) => {
                    let inputter;
                    inputter = document.createElement("div");
                    if (element.id == "box") {
                        inputter.className = "size" + counter;
                        counter++;
                    }else inputter.className = element.className
                    inputter.id = element.id;
                    document.querySelector("#selectors").appendChild(inputter);
                    if ("height" in element) {
                        inputter.addEventListener("click", () => {
                            anime({
                                targets: '#selectedItem',
                                scale: element.height,
                                translateY: 15,
                                translateX: 50
                            });
                            formInput.forEach(element => {
                                element.removeAttribute(("checked"));
                            });
                            formInput[index].setAttribute("checked", true);
                            document.querySelector("#selectedItem").style.backgroundImage = getComputedStyle(inputter).backgroundImage;
                        })
                    }
                    if (element.id == "checkbox") {
                        inputter.className = element.className;
                        counter++;
                        inputter.addEventListener("click", () => {
                            if (!formInput[index].checked) {
                                formInput[index].setAttribute("checked", true);
                            }
                            else {
                                formInput[index].removeAttribute("checked");
                            }
                            document.querySelector("#checkbox").classList.toggle("unchecked");
                        })
                    }
                })
            }
        });
    }
}
export { UserInterfaceForm };