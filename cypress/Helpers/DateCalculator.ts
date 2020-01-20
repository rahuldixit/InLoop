export function DateCalculator(desiredDate: string) : string 
{
    var date;
    var dateCalc = new Date();
        
    switch(desiredDate)
    {
        case "today":
            date = dateCalc.getFullYear()+"-"+ ("0" + (dateCalc.getMonth() + 1)).slice(-2)+"-"+dateCalc.getDate();
            break;
        case "next week":
            date = dateCalc.getFullYear()+"-"+ ("0" + (dateCalc.getMonth() + 1)).slice(-2)+"-"+(dateCalc.getDate()+1);
            break;
        default:
            date = dateCalc.getFullYear()+"-"+ ("0" + (dateCalc.getMonth() + 1)).slice(-2)+"-"+dateCalc.getDate();
            break;
    }    
    return date.toString();
};