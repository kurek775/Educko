
import { Inject,ScheduleComponent,WorkWeek,ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";

function reservesystem (){

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