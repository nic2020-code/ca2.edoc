(function () {
    function initRecipientForm() {
        var originalRecipientBlock = document.querySelector("#original-recipient-block");
        var recipientList = document.querySelector("#recipient-list");
        var addRecipientButton = document.querySelector("#add-recipient-button");
        var enableOrdering = document.querySelector("#enable-ordering");

        originalRecipientBlock.removeAttribute("id");

        addRecipientButton.addEventListener("click", function () {
            var count = recipientList.getElementsByClassName('recipient').length;
            var cloned = originalRecipientBlock.cloneNode(true);
            var elemOrder = cloned.querySelector('.order-text.hidden-block');
            var elemEmail = cloned.querySelector('.text-field-2.w-input');
            var elemName = cloned.querySelector('.text-field-3.w-input');
            var elemSelection = cloned.querySelector('.sign-select');

            elemOrder.setAttribute("id", "order-input" + count);
            elemEmail.setAttribute("id", "email" + count);
            elemName.setAttribute("id", "name" + count);
            elemSelection.setAttribute("id", "role-sign" + count);

            recipientList.append(cloned);

            refreshOrderCheckboxVisibility();
        });

        enableOrdering.addEventListener("change", function (event) {
            event.stopPropagation();

            var orderInputs = document.querySelectorAll(".order-text");

            orderInputs.forEach(function (orderInput) {
                if (enableOrdering.checked == true) {
                    orderInput.classList.remove("hidden-block");
                } else {
                    orderInput.classList.add("hidden-block");
                }
            });
            // if (enableOrdering.checked == true) {
            //     orderInputs.style.display = "block";
            // } else {
            //     orderInputs.style.display = "none";
            // }
        });

        recipientList.addEventListener("click", function (event) {
            event.stopPropagation();

            if (!event.target.classList.contains("delete-recipient-button"))
                return;

            event.target.closest(".recipient").remove();
            refreshOrderCheckboxVisibility();
        });

        function countRecipientBlock() {
            return document.querySelectorAll('.recipient').length;
        }

        function refreshOrderCheckboxVisibility() {
            if (countRecipientBlock() > 1) {
                enableOrdering.removeAttribute('disabled');
            } else {
                enableOrdering.setAttribute('disabled', 'disabled');
            }
        }

    }

    initRecipientForm();
})();

(function recipientSubmitClickHandle() {

    var resetButton = document.querySelector("#reset-button");
    var submitButton = document.querySelector("#submit-button");
    var resetBtn = document.querySelector("#reset-btn");
    var submitBtn = document.querySelector("#submit-btn");

    submitBtn.addEventListener("click", function () {
        submitButton.click();
    });

    resetBtn.addEventListener("click", function () {
        resetButton.click();
    });

})();

