import { Footer_AriaLabel } from "../accessibility/Aria";


/**
 * Component that represents the page title!
 * @returns the component JSX to be rendered with our title inside
 */
function Footer() {
    // return our component!
    return <div className="footer"
                aria-label={Footer_AriaLabel}>
        * Please note that the submit button will not show up until you have answered every question!
        You must select at least one genre if we are not pulling from your liked songs.
    </div>;
}

export default Footer;
