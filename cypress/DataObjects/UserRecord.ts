export class UserRecord
    {
        constructor(FirstName: string, LastName: string, StartDate: string, Email: string)
        {
            this.firstName = FirstName;
            this.lastName = LastName;
            this.startDate = StartDate;
            this.email = Email;
        }

        public firstName:  string;
        public lastName:   string;
        public startDate:  string;
        public email:      string;
    };
