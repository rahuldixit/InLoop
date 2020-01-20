import { Log } from '../Log/Log';
import {Workbook} from "exceljs";

export  class DataReader
{
  public workBook: Workbook = new Workbook(); 
  
  public constructor()
  {

  }

  public async parseFile(fileName:string)
  {   Log("pop\n");
      await this.workBook.xlsx.readFile(fileName);
    //   .then( (x)=> {
    //   Log('#');
    //   Log(isNullOrUndefined(x.worksheets).toString());
    //   Log(isNullOrUndefined(x.worksheets.length).toString());
      
    //   Log("A: "+ x.worksheets.length.toString());
      
    // }
    // );
    Log("pop2\n");
                
   
       
  }

  
  public getData(workSheetName: string, columnName: string, testCaseId: string) : string 
  {
    //let workSheet: Worksheet = this.workBook.getWorksheet(workSheetName);
    let columnData: string  = "";
    /*workSheet.eachRow( (x: Row)=>{
      if(x.findCell(0)?.toString() == testCaseId)
      {
        columnData = x.getCell(columnName)?.toString();
      }
    });
    
        
    if (columnData == null)
    {
        throw new Error("The column " + columnName + " does not exist, or has an incorrect name");
    }*/
    
    return columnData;
  };
}