
const users = [{
    id: 1,
    name: 'Andrew',
    schoolId: 101
  }, {
    id: 2,
    name: 'Jessica',
    schoolId: 999
  }];

  const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
  }, {
    id: 2,
    schoolId: 999,
    grade: 100
  }, {
    id: 3,
    schoolId: 101,
    grade: 80
  }];

const getUser=(id)=>{
    return new Promise((resolve,reject)=>{
       let user= users.find(user=>user.id==id);
       if(user){
           resolve(user);
       }
       else{
           reject('Unable to find user with id of ${id}.');
       }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
      resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
  };



const getViaAsync = async (userId) => {
    return 'Mike';
  };
  
  const getViaPromise=function(id){
      return new Promise((resolve,reject)=>{resolve("Mike");});
  };


  getViaAsync(1).then((name)=>console.log(name));
  console.log(getViaAsync(1));
  getViaPromise(1).then((name)=>{console.log(name)});

  const getErrorViaAsync=async (userId)=>{
      throw new Error("Testing error");
      return "mike";
      
  };

//   getErrorViaAsync().
//   then((name) => { console.log(name);})
//   .catch((e) => {
//     console.log(e.name);
//   });

  const getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);
  
    let average = 0;

  if (grades.length > 0) {
    average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
  }

  return `${user.name} has a ${average}% in the class.`;
  };

  getStatusAlt(1).then((status)=>console.log(status));