package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"math/rand"
	"time"
)

// Create a new type of 'deck' which is a slice of string
type deck []string

func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

func newDeck() deck {
	cards := deck{}

	cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string{"One", "Two", "Three", "Four"}

	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, value+" of "+ suit)
		}
	}
	return cards
}

// split the number of cards by size which is a index length
func deal(d deck, handSize int) (deck, deck) {
	return d[:handSize], d[handSize:]
}

func (d deck) toString() string {
	// get list of string and join it to be one string
	return strings.Join([]string(d), ",")
}

func (d deck) saveToFile(filename string) error {
	return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
}

func newDeckFromFile(filename string) deck {
	bs, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Println( "Error", err)
		os.Exit(1)
	}
	s := strings.Split(string(bs), ",")
	return deck(s)
}

func (d deck) suffle() {
	seed := rand.NewSource(time.Now().UnixNano())
	r := rand.New(seed)
	for i := range d {
		// go use the same seed as a generate to random generate value. we need to end up to get a own seed
		// newPosition := rand.Intn(len(d) - 1 )
		// https://golang.org/pkg/crypto/rand/
		// generate the index between 0 - (deck length -1)
		newPosition := r.Intn(len(d)- 1)
		d[i], d[newPosition]= d[newPosition], d[i]
	}
}