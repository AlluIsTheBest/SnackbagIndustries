

fetch("companies.json")
    .then(response => response.json())
    .then(data => {



        const areaaa = document.getElementById("companies")

        data.forEach(element => {
            newelement = document.createElement("div")
            newimg = document.createElement("img")
            newtext = document.createElement("p")
            newelement.classList.add("businessbox")
            newtitle = document.createElement("h2")
            texdiv = document.createElement("div")
            texdiv.classList.add("textdiv")
            
            

            newimg.src = element[6]
            areaaa.appendChild(newelement)
            newelement.appendChild(newimg)
            texdiv.appendChild(newtitle)
            texdiv.appendChild(newtext)
            newelement.appendChild(texdiv)
            newtitle.innerHTML = element[1] + "   " + element[0]
            newtext.innerHTML = element[7]


        });


    })

    .catch(error => console.log(error))