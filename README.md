
# Entrega

Problema escolhido: https://www.beecrowd.com.br/judge/en/problems/view/3142

## Unified Modeling Language

### Diagram.puml

![Diagrama](./diagram.png)

## Gherkin.puml

@domain
Feature: Translate column letters to number

Narrative:

As an Excel user, I want to translate
column letters to numbers when possible

Scenario Outline: Translate column to number

Given the user enats to send the number of the column by letter
When the Column is <Column>
Then the expected Result is <Result>

Examples: <br />
| Column | Result | <br />
| A | 1 | <br />
| Z | 26 | <br />
| AA | 27 | <br />
| BA | 53 | <br />
| BG | 59 | <br />
| XFD | 16384 | <br />
| XFE | Essa coluna nao existe Tobias! |