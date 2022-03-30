Took inspiration from the at MacOS Calendar app

# Getting Started

`$ yarn install`
`$ yarn dev`

Then visit http://localhost:3000/

One can add and edit events. There's no form validation though and just a basic text input for the date due to lack of time.
The UI has back / next buttons to navigate across weeks.
It doesn't handle events overlaping. There's a (naive) function that figures it out, but no UI. Same for too many events on a single day.

Tried to decouple and reuse components as much as possible: see for example <Grid>, <GridItem> and <EditEventForm>.

Used Matrial UI as it has already components available for modals, buttons, icons, colour palette, etc. They behave coherently with each other and they're cross-browser compatible.

Hesitated using Day.js but eventually put it in and I'm happy with it's expresivity. Could have refactored a few outher date logic to use it, but didin't have the time.
