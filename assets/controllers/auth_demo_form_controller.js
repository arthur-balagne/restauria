import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['status'];

    showStatus(message) {
        if (this.hasStatusTarget) {
            this.statusTarget.textContent = message;
        }
    }
}
