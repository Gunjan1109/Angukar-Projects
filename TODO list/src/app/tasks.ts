export class Tasks{
    taskName : string
    date : Date
    status : string
    priority : number


    constructor(tn,d,s,p){
        this.taskName = tn;
        this.date = d
        this.status = s
        this.priority = p
    }
}

