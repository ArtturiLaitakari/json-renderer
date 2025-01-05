## JSON-Renderer

Suurin osa sovelluskehityksestä itselläni on ollut tällä rakenteella:

1. Lomake kerää dataa
2. Sovellus jalostaa tietoa ja tallentaa sen tietokantaan
3. Sovellus esittää tiedon listoina ja muina tapoina.

Tämä framework suoraviivaistaa tätä prosessia paljon.

- Käyttäjä luo editorilla itse lomakkeen ja tallentaa sen
- Järjestelmä automaattisesti luo siitä web sivun tai lomakkeen.
- Konsultti tarvitaan aluksi lomakkeen toiminnallisuuksien rakentamiseen, mutta se pitäisi onnistua asiakkaan kanssa editorilla saman tien.

```mermaid
graph TD
    subgraph Client
        A[React Client]
        A -->|Renders| B[HTML Elements / Material UI Components]
    end

    subgraph Server
        C[Node.js Backend]
        C -->|Fetches UI data| D[MongoDB]
        D -->|Stores JSON as Binary| C
    end

    A -->|Requests Page| C
    C -->|Sends JSON| A
```
