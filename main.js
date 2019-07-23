var data = {name : "1" , job : "2" , skill1 : "3" , skill2 : "4" , skill3 : "5" , futureSkill : "6"}

class Human{
constructor(data){
        this.name = data.name
        this.job = data.job
        this.skills = data.skills
        this.toDo = data.futureSkill
    }
    getJob(){
        Human.job = "Freelancer"
        console.log(Human.job)
    }
    leaveJob(){
        Human.job = "Uneducated"
    }
    learnNewSkill(futureSkill){
        this.skills.push(futureSkill)
    }
    forgetSkill(){
        this.skills.pop()
    }
}

class Student extends Human{
    constructor(data){
        super(data);
    }
}

const Malek = new Student ({name :"Malek Touati" , job : "Student" , skills : ["Basketball" , "Web development" , "Boring shit"] , futureSkill : "React"})

console.log(Malek.name)
console.log(Malek.job)
console.log(Malek.skills)



