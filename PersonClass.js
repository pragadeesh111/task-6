//declaring class name as person by using class keyword.
class person{             
    constructor(firstname,lastname,age,colour,occupation,experience,degree){
        this.firstname   =firstname;
        this.lastname    =lastname;
        this.age         =age;
        this.colour      =colour;
        this.occupation  =occupation;
        this.experience  =experience;
        this.degree      =degree;
    }
    person_details(){
        let data=`
        Name         :   ${this.firstname} ${this.lastname}
        Age          :   ${this.age}
        Color        :   ${this.colour}
        Occupation   :   ${this.occupation}
        Experience   :   ${this.experience}
        Degree       :   ${this.degree}
        `;                                                                        //using template literals here.
        return data;
    }
}
let person1=new person("Pragadeesh","Waran",34,"black","Engineer",9,"Mechanical");      //creating instance of an object and give value for parameters.
let person2=new person("Sai","kishore",30,"black","Costume Designer",7,"Costume Design And Fashion");
let person3=new person("Praveen","Raj",25,"brown","Fashion Designer",5,"Fashion Design")

let arrey_persons=[person1,person2,person3];                                      //array of instance.
arrey_persons.forEach((data)=>console.log(data.person_details()));                //using forEach method to apply method for all instance and print.

//This above program output is given below:
/* 
Name         :   Pragadeesh Waran
Age          :   34
Color        :   black
Occupation   :   Engineer
Experience   :   9
Degree       :   Mechanical


Name         :   Sai Kishpre
Age          :   30
Color        :   black
Occupation   :   Costume Designer
Experience   :   7
Degree       :   Costume Design and Fashion


Name         :   Praveen Raj
Age          :   25
Color        :   brown
Occupation   :   Fashion Designer
Experience   :   5
Degree       :   Fashion Design

*/