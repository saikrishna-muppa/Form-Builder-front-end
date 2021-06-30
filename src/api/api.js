export  const postForm = async ( body) => {

  const url = (length)=> {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
      }
      return result;
    }

    // console.log(url(5));

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    

    const data = { body: body,id:url(5),createdAt:today};
    console.log("hari",data)
    const response = await fetch(`http://localhost:3001/postForm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const jsondata = await response.json()

    console.log("hari res",jsondata) 

  };

  export const getForms = async ( ) => {

    // const data = { body: body, name: name };
    const response = await fetch(`http://localhost:3001/getForm`);
    const jsondata = await response.json()

    console.log("get response",jsondata) 
    return jsondata

  };