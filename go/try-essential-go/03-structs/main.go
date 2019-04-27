package main

import "fmt"

type contactInfo struct {
	email   string
	zipCode int
}

type person struct {
	firstName string
	lastName  string
	contactInfo
}

func main() {
	carmen := person{
		firstName: "carmen",
		lastName:  "liu",
		contactInfo: contactInfo{
			email:   "carmen.liujia@gmail.com",
			zipCode: 1024,
		},
	}

	// An `&` turned value into address:
	fmt.Println(&carmen)
	carmenPointer := &carmen
	fmt.Println(carmenPointer.lastName)
	// by change the pointer, changes the values as well
	carmenPointer.lastName = "lau"
	fmt.Println(carmenPointer.lastName)

	// carmenPointer := &carmen
	// carmenPointer.updateName("carmen carmen")
	carmen.updateName("carmen carmen")
	carmen.print()

	var alex person
	alex.firstName = "Alex"
	alex.lastName = "Nothing"
	alex.print()
}

// this would not works , need pointers
// func (p person) updateName(newFirstName string) {
// 	p.firstName = newFirstName
// }

func (pointerToPerson *person) updateName(newFirstName string) {
	// * turn address into value
	(*pointerToPerson).firstName = newFirstName
}

func (p person) print() {
	fmt.Printf("%+v", p)
}

// func newCard() string {
// 	return "Five of Diamond"
// }
