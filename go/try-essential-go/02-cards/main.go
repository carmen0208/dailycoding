package main

func main() {
	// var card string = "Ace of Spades"
	// =
	// card := "Ace of Spades"
	// cards := deck{"Ace of Spades", newCard()}
	// cards = append(cards, "Six of Spades")
	// card = "Five of Diamond"
	// fmt.Println(cards)
	// cards := newDeck()
	// cards.print()
	// hand , remainingCards := deal(cards, 5)
	// hand.print()
	// remainingCards.print()
	// cards.saveToFile("cards.txt")
	cards := newDeckFromFile("cards.txt")
	cards.suffle()
	cards.print()
}

// func newCard() string {
// 	return "Five of Diamond"
// }