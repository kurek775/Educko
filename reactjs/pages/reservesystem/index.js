
import { Inject,ScheduleComponent,WorkWeek,ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";

function reservesystem (){
/**
 * L10n modules provides localized text for different culture.
 * ```typescript
 * import {setCulture} from '@syncfusion/ts-base-library';
 * //load global locale object common for all components.
 * L10n.load({
 *    'fr-BE': {
 *       'button': {
 *            'check': 'vérifié'
 *        }
 *    }
 * });
 * //set globale default locale culture.
 * setCulture('fr-BE');
 * let instance: L10n = new L10n('button', {
 *    check: 'checked'
 * });
 * //Get locale text for current property.
 * instance.getConstant('check');
 * //Change locale culture in a component.
 * instance.setLocale('en-US');
 * ```
 */
    return(

        <ScheduleComponent   timeFormat="HH:mm" >
        <Inject services = {[WorkWeek] }></Inject>
        <ViewsDirective>
 
        <ViewDirective option='WorkWeek'/>
 
    </ViewsDirective>
        </ScheduleComponent>
    )
}

export default reservesystem;

