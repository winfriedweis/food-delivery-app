// Shared Parrent Layout of all Screens in (tabs)

import {Redirect, Slot} from "expo-router";


// Slot ist ein Platzhalter für die aktive Child Route.
// Er rendert im Layout den Screen zu dem gerade navigiert wurde.
// Praktisch, um ein gemeinsames Layout (Header/Footer/Wrapper/Provider)
// um alle Screens in einem Ordner herum zu bauen, ohne jeden Screen einzeln zu wrappen.
// Slot ist kein Navigator-UI wie Stack/Tabs, sondern nur die Einfüge-Stelle für das aktuelle Child-Element.

export default function _Layout() {
    const isAuthenticated: boolean = false;
    if (!isAuthenticated) return <Redirect href="/sign-in"/>
    return <Slot/>
}
