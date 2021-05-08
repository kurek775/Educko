
import { Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule";

function reservesystem (){

    return(

        <ScheduleComponent>
        <Inject services = {[Day, Week, WorkWeek, Month, Agenda] }></Inject>
        </ScheduleComponent>
    )
}

export default reservesystem;