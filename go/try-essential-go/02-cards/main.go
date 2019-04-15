package main

func main() {
	// var card string = "Ace of Spades"
	// =
	// card := "Ace of Spades"
	// cards := deck{"Ace of Spades", newCard()}
	// cards = append(cards, "Six of Spades")
	// card = "Five of Diamond"
	// fmt.Println(cards)

	// -----------manual add deck starts-----------
	// cards := newDeck()
	// cards.print()
	// hand , remainingCards := deal(cards, 5)
	// fmt.Println("hand cards")
	// hand.print()
	// fmt.Println("remain cards")
	// remainingCards.print()
	// cards.saveToFile("cards.txt")
	// -----------manual add deck ends-----------

	cards := newDeckFromFile("cards.txt")
	cards.suffle()
	cards.print()
}

// func newCard() string {
// 	return "Five of Diamond"
// }