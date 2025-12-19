const person ={
  name:"Nader",
  email:"abc@gmail.com",
  mobil:"0125484226",
  id:"03050",
  birthYear:1981,
calcAge:function() {
    this.age = 2025-this.birthYear;
  return this.age;
},
summryInfo: function(){
    return `name of the employee:${this.name} , email ${this.email} , mobil ${this.mobil}, age ${this.calcAge()}`;
}

}


console.log(person.summryInfo());
