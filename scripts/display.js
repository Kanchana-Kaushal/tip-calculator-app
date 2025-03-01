import { resetInput } from "./input.js";
let isResetBtnActive = false;

export function displayData(inputValues) {
    const billAmount = inputValues.billAmount || 0;
    const people = inputValues.people || 0;
    const percentage = inputValues.tipPercentage;
    const tipValue = (billAmount / 100) * percentage;
    const tipPerPerson = tipValue / people;
    const totalPerPerson = (billAmount + tipValue) / people;

    //assign true or false for "active" class swap in the reset button
    if (billAmount) {
        isResetBtnActive = true;
    } else {
        isResetBtnActive = false;
    }

    document.querySelector(
        ".js-display-html"
    ).innerHTML = `<div class="space-y-4 md:space-y-8">
                        <div class="flex items-center justify-between">
                            <div>
                                <p
                                    class="text-custom-Light-grayish-cyan text-sm font-bold"
                                >
                                    Tip Amount
                                </p>

                                <p
                                    class="text-custom-Grayish-cyan text-xs font-bold"
                                >
                                    / person
                                </p>
                            </div>
                            <p
                                class="text-custom-Strong-cyan text-xl font-extrabold md:text-4xl"
                            >
                                $${tipPerPerson.toFixed(2)}
                            </p>
                        </div>

                        <div class="flex items-center justify-between">
                            <div>
                                <p
                                    class="text-custom-Light-grayish-cyan text-sm font-bold"
                                >
                                    Total
                                </p>

                                <p
                                    class="text-custom-Grayish-cyan text-xs font-bold"
                                >
                                    / person
                                </p>
                            </div>

                            <p
                                class="text-custom-Strong-cyan text-xl font-extrabold md:text-4xl"
                            >
                                $${totalPerPerson.toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <button
                        class="bg-custom-Strong-cyan text-custom-cyan mt-8 w-full rounded-md p-2 font-bold uppercase js-reset-btn ${
                            isResetBtnActive
                                ? "button-active-state"
                                : "opacity-40"
                        }"
                    >
                        reset
                    </button>`;

    if (isResetBtnActive) {
        document
            .querySelector(".js-reset-btn")
            .addEventListener("click", () => {
                resetInput();
            });
    }
}
