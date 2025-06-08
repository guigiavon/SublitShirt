textil =[
            { "id": 1,
            "nombre": "Gorras",
            "imagen": "imagenes/Gorras.gif",
            "descripcion": "Gorras con estilo, perfectas para protegerte del sol mientras luces increíble.",
            "precio": 1500,
            "categoria": "Textil"  
            },
             {
            "id": 2,
            "nombre": "Remeras",
            "imagen": "imagenes/RemeraBlanca.gif",
            "descripcion": "Remeras clásicas y cómodas para un look relajado en cualquier ocasión.",
            "precio": 2000, 
            "categoria": "Textil"
        }
      ]
   

for producto in textil:
    if producto["id"] == 0:
        print(producto['precio'])
    else:
        print("no existe")
        break


    def myfuncion():
        return 10
    

    resultado = myfuncion()
    print (resultado)