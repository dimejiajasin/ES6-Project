import {TitleBar} from "../ui/title-bar.js";

export class ApplicationBase {
    constructor(title){
        this.title =title;
        this.titleBar = new titleBar(this.title);
    }
}
