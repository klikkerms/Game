const requestUrl = 'https://jsonplaceholder.typicode.com/posts'

function radik()
{
    var radik_check;
    radik_check = document.getElementsByName('r1');
    for(var i = 0; i < radik_check.length; i++)
    {
        if(radik_check[i].checked)
        {
            //alert('Выбран элемент ' + i)
            const body = {
                id_game: i
            }
            //alert(JSON.stringify(body))



            return new Promise((resolve,reject)=>{
                const xhr = new XMLHttpRequest()

                xhr.open('POST', requestUrl)

                xhr.responseType = 'json'
                xhr.setRequestHeader('Content-type','application/json')

                xhr.onload = () => {
                    if (xhr.status >= 400) {
                        reject(xhr.response)
                    }
                    else{
                        resolve(xhr.response)
                    }
                }
                xhr.onerror = () => {
                    reject(xhr.response)
                }

                xhr.send(JSON.stringify(body))
                xhr.onload = () => console.log(xhr.response);
            })

        }
    }

















}











