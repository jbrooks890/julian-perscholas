() => {

    const form = document.querySelector("#classmateFriendList");
    const wrapper = form.parentElement;
    const fieldsets = form.querySelectorAll(fieldset);

    const campuses = [
        "Atlanta",
        "Chicago",
        "New York",
        "Washington DC",
        "Boston"
    ]

    fieldsets.classList.add("active");

}