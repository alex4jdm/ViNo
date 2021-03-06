export default class Frame {
    constructor (id, background = null, script, textContent, choose = null) {
        this.id = id; // Id will be int >= 0
        this.background = background; // String, that store background css property
        this.script = script; // Custom script language (view vinoScript.js)
        this.textContent = textContent; // This property will contain text of current frame
        this.choose = choose; // It will be an object 
    }

    render () {
        if (this.background !== null) {
            jQuery("#vino .background").css("background", this.background);
        }

        // script running needed

        jQuery("#vino #text .content").html(this.textContent);

        // choose render needed
    }
}