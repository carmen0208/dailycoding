package main

import (
	"fmt"
)

func main() {
	// var card string = "Ace of Spades"
	// =
	// card := "Ace of Spades"
	cards := []string{"Ace of Spades", newCard()}
	cards = append(cards, "Six of Spades")
	// card = "Five of Diamond"
	// fmt.Println(cards)
	for i, card := range cards {
		fmt.Println(i, card)
	}
}

func newCard() string {
	return "Five of Diamond"
}