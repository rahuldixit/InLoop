export const getCellByName = (data: any, workSheet:any, testCaseId:String, cellName:string) : string =>
    {
            var workSheetData = data[workSheet];
            for(let i=0; i<workSheetData.length;i++)
            {
                if(workSheetData[i].TestCaseID==testCaseId) 
                 return workSheetData[i][cellName];
            }   
            return null;           
    }
