//style
import './styles/baseStyle.scss'
import './styles/header.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/main.scss'
//js
import { urlChecker } from './js/checkURL'
import { handleSubmit } from './js/formHandler'

// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO
 *  - Get Value of the input for URL
 *  - Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */
export {
    urlChecker,
    handleSubmit
}