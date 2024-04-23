---
tags: ["patterns", "java"]
---
# 20240122: Strategy: Composición en vez de Herencia

<TagsLinks />

- Cuando se aplica herencia, las cosas en la clase padre afectan a todos los hijos.
	- Si se agrega algo en el padre, aquellos que no lo requieran deben sobrescribirlo.
	- La herencia facilita el uso de lo común en un único contexto pero dificulta el uso de lo común en otros contextos

```mermaid
classDiagram
	
	class Duck {
		+String type
		+String name
		+quack()
		+swim()
		+fly()
		+display()
	}

	Duck <|-- MallardDuck
	Duck <|-- RedheadDuck
	Duck <|-- RubberDuck
	Duck <|-- DecoyDuck

	class RubberDuck {
		+quack()
		+swim()
		+fly()
	}
	
	class DecoyDuck {
		+swim()
		+fly()
	}
	
```

- Cuando se desea que solamente algunas cosas sean heredados por algunos hijos

- Con Herencia: Behavior en la implementación
	- lo que es no común se puede extraer interfaces
	- los hijos que implementen las interfaces tendrán lo no común
		- Cada uno necesitará implementar lo que no es común

```mermaid
classDiagram

	class Quackable {
		<<interface>>
		+quack()
	}
	
	class Flyable {
		<<interface>>
		+fly()
	}

	class Duck {
		+String type
		+String name
		+swim()
		+display()
	}

	Duck <|-- MallardDuck
	Quackable <|.. MallardDuck
	Flyable <|.. MallardDuck
	
	Duck <|-- RedheadDuck
	Quackable <|.. RedheadDuck
	Flyable <|.. RedheadDuck
	
	Duck <|-- RubberDuck
	Quackable <|.. RubberDuck

	Duck <|-- DecoyDuck

	class MallardDuck {
		+quack()
		+fly()
	}
	
	class RedheadDuck {
		+quack()
		+fly()
	}
	
	class RubberDuck {
		+quack()
	}
	
	class DecoyDuck {
	}
```

- Con Composición: Behavior en el tipo
	- lo que no es común se puede extraer a clases que implementen cierta interface
	- el padre usa el tipo
	- los hijos usan las implementaciones

```mermaid
classDiagram

	class QuackBehavior {
		<<interface>>
		+quack()
	}

	class Quack {
		+quack()
	}
	
	class MuteQuack {
		+quack()
	}
	
	class Squeak {
		+quack()
	}
	
	QuackBehavior <|..Quack : is-a
	QuackBehavior <|..MuteQuack : is-a
	QuackBehavior <|..Squeak : is-a

	class Duck {
		<<abstract>>
		+String type
		+String name
		+QuackBehavior quackBehavior
		+FlyBehavior flyBehavior
		
		+performQuack()
		+swim()
		+performFly()
		+display()
	}

	class FlyBehavior {
		<<interface>>
		+fly()
	}
	
	class FlyWithWings {
		+fly()
	}
	
	class FlyNoWay {
		+fly()
	}
	
	FlyBehavior <|.. FlyWithWings : is-a
	FlyBehavior <|.. FlyNoWay: is-a

	QuackBehavior *.. Duck : has-a
	FlyBehavior *.. Duck : has-a
	
	Duck <|-- MallardDuck
	Duck <|-- RedheadDuck
	Duck <|-- RubberDuck
	Duck <|-- DecoyDuck

	class MallardDuck {
		+QuackBehavior quackBehavior = Quack
		+FlyBehavior flyBehavior = FlyWithWings
	}
	
	class RedheadDuck {
		+QuackBehavior quackBehavior = Quack
		+FlyBehavior flyBehavior = FlyWithWings
	}

	class RubberDuck {
		+QuackBehavior quackBehavior = Squeak
		+FlyBehavior flyBehavior = FlyNoWay
	}
	
	class DecoyDuck {
		+QuackBehavior quackBehavior = MuteQuack
		+FlyBehavior flyBehavior = FlyNoWay
	}
	
```
