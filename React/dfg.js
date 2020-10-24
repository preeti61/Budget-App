// const notes={
  //   asdkjkkdfgh:{
  //     title:'to do',
  //     body:'complete 5 projects'
  //   },
  //   adffffds:{
  //     title:'to do',
  //     body:'get an internship'
  //   }
  // }


  // database.ref('expenses').push({
  //   description:'electricity',
  //   amount:1000,
  //   note:'controlled',
  //   createdAt:8000
  // })
  
//   database.ref('expenses').on('value',(snap)=>{
//     const expenses=[];
//     snap.forEach((childsnap)=>{
//       expenses.push({
//         id:childsnap.key,
//         ...childsnap.val()
//       })
//     })
//     console.log(expenses)
// })
database.ref('expenses').on('child_changed',(snap)=>{
    console.log(snap.val())
  })
    
  // database.ref().on('value',(snap)=>{
  // console.log(snap.val());
  // })
  
  // database.ref().off()
    // database.ref('job/company').once('value').then((snap)=>{
    //        const val=snap.val();
    //        console.log(val)
    // }).catch((e)=>{
    //   console.log("error",e)
    // })
  
  //   database.ref().set({
  //       name:'Preeti Rautela',
  //       age:20,
  //       isSingle:false,
  //       job:{
  //         title:'SDE',
          
  //       },
  //       location:{
  //           city:'Pantnagar',
  //           country:'India'
  //       }
  //   }).then(()=>{
  //     console.log('data manipulated')}).catch(()=>{
  //       console.log('Got an error')
      
  //   })
  // database.ref().update({
   
  //  'job/title':"Scientist",
  //  'job/company':'ISRO'
   
  
  // })
  
  
  
  
  //   database.ref('isSingle').set(null)
  // // //   database.ref().set('this is my data')
  
  // database.ref('age').set({
  //     age:20
  // })
  // database.ref('location/city').set('Rudrapur')
  
  // database.ref('attributes').set({
  //     height:157,
  //     weight:59
  // })
  // const delData=database.ref('isSingle');
  // delData.remove().then(()=>{
  // console.log('data removed')
  // }).catch(()=>{
  //   console.log('error occurred')
  // })