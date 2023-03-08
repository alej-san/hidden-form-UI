import { UserInterfaceForm } from "./formCreator.js";
var config = {
    "id": "baseForm",
    "elements": [
        {
            "id": "barProgress",
            "type": "hidden",
            "value": "50",
            "name": "barProgress"
        },
        {
            "type": "radio",
            "name": "selector"

        },
        {
            "type": "radio",
            "name": "selector"
        },
        {
            "type": "radio",
            "name": "selector"
        },
        {
            "type": "checkbox",
            "name": "check"
        }
    ]
};
var UIItems = {
    "id": "interactables",
    "items": [
        {
            "id": "progress",
            "class": "progress",
            "progress": [
                {
                    "id": "text",
                    "value": "50"
                },
                {
                    "id": "bar",
                    "value": "50",
                    "max": "100"
                },
                {
                    "id": "minus",
                    "content": "-1",
                    "value" : ""
                },
                {
                    "id": "plus",
                    "content": "1",
                    "value" : ""
                    
                }
            ]
        },
        {
            "id": "selectors",
            "class": "selectors",
            "selectors": [
                {
                    "id": "selectedItem",
                    "className": "selectedItem"
                    
                },
                {
                    "id": "box",
                    "height": "1",
                    "select": "#radio1"
                },
                {
                    "id": "box",
                    "height": "2",
                    "select": "#radio2"
                },
                {
                    "id": "box",
                    "height": "3",
                    "select": "#radio3"
                },
                {
                    "id": "checkbox",    
                    "className" : "unchecked checked"                               
                }
            ]
        }
    ]
}
new UserInterfaceForm(config, UIItems);