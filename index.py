import matplotlib.pyplot as plt #Pyplot es un módulo Matplotlib que propone varias funciones sencillas para añadir elementos tales como líneas, imágenes o textos a los ejes de un gráfico.


print("----------------------")
print("Bienvenido! ヾ(•ω•`)o")
print("----------------------")
repeticion=int(input("- Cuantas veces queres que se repita el codigo?: "))
print("----------------------")
lista=[]
x=[]
y=[]
for i in range(0,repeticion):
    def variables():
        vel= float(input("- Ingrese la velocidad en m/s: "))
        while vel<0:
          vel= float(input("No se puede ingresar la velocidad en negativo, ingrese de nuevo la velocidad (+): "))
          if vel>0:
            break

        cabal=float(input("- Ingrese la distancia del Objeto A a el Objeto B (en metros): "))
        while cabal<0:
          cabal=float(input("No se puede ingresar la distancia en negativo, ingrese de nuevo la velocidad (+): "))
          if cabal>0:
            break
        
        fren= float(input("- ingrese a que aceleracion el Objeto B desacelera (-): "))
        return calculos(vel, cabal, fren) # es una palabra reservada de python que marca el final de la funcion y devuelve los resultados obtenidos
    
    def calculos(vel, cabal, fren):
        while fren>0:
            fren= float(input("No se puede ingresar la deseceleracion en Positivo, vuelve a ingresarla en Negativo (-): "))
            if fren<0:
                break
            
        calc= 0-vel
        tie= calc/fren
        dist= 0+vel*tie+0.5*fren*(tie*tie)
        if dist>cabal:
            print("El objeto A ha colisionado con el Objeto B.")
            c = vel + (1/2)*(0-vel)
            c2 = cabal/c
            acel = (0-vel)/c2
            print("El objeto B necesitaba frenar a ", acel, "m/s2 para no colisionar.")
            print("Colisionaron en ",tie, "segundos")
            lista.append(acel)
            lista.append(tie)

        elif dist<=cabal:
            dist2=cabal-dist
            print("Los objetos quedaron a",dist2, "metros de colisionar.")
            print("Desaceleraron en ",tie, "segundos")
            lista.append(dist2)
            lista.append(tie)
        y.append(tie)
        x.append(dist)
    variables()
print("-----------------------------")
print("Cargando resultados...")
print("-----------------------------")
width=0.1
plt.bar(y,x, width=width, color="red") #representa la distacia.
plt.scatter(y,x, color="blue") #marca el punto exacto donde cruza tiempo y distancia.
plt.plot(y,x, color="green") #marca como varia el tiempo.
plt.ylabel("Distancia")
plt.xlabel("Tiempo")
plt.title("Distancia sobre tiempo (⊙ˍ⊙)")
plt.show()