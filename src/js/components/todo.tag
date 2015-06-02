<todo>

  <h3>{ opts.title }</h3>

  <ul>
    <li each={ items.filter(filter); }>
      <label class={ completed: done }>
        <input type="checkbox" checked={ done } onclick={ parent.toggle }> <span class="{completed : done}"> { title } </span><a class="pure-button button-error button-xsmall" disabled={ !done } onclick={ parent.remove }>Remove</a></label>
    </li>
  </ul>

  <form class="pure-form" onsubmit={ add }>
    <input name="input" onkeyup={ edit }>
    <button class="pure-button" type="submit" disabled={ !text }>Add #{ items.filter(filter).length + 1 }</button>
  </form>

  <!-- this script tag is optional -->
  <script>
    this.items = opts.items;
    this.i = 0;

    edit(event) {
      this.text = event.target.value;
    }

    add(event) {
      if (this.text) {
        this.items.push({ title: this.text });
        this.text = this.input.value = '';
      }
      this.sort(this.items,"title");
    }

    remove(event) {
        // looped item
        var item = event.item
        // find the index on the collection
        var index = this.items.indexOf(item)
        // remove from collection
        if (item.done) {
            this.items.splice(index, 1)
        }
    }

    // an example how to filter items on the list
    filter(item) {
      return !item.hidden;
    }

    toggle(event) {
      var item = event.item;
      item.done = !item.done;
      return true
    }

    sort(items,prop) {
        items.sort(function (a, b) {
          if (a[prop] > b[prop]) {
            return 1;
          }
          if (a[prop] < b[prop]) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
    }

  </script>

  <style media="screen">

    .button-success,
    .button-error,
    .button-warning,
    .button-secondary {
        color: white;
        border-radius: 4px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }

    .button-success {
        background: rgb(28, 184, 65); /* this is a green */
    }

    .button-error {
        background: rgb(202, 60, 60); /* this is a maroon */
    }

    .button-warning {
        background: rgb(223, 117, 20); /* this is an orange */
    }

    .button-secondary {
        background: rgb(66, 184, 221); /* this is a light blue */
    }

    .button-xsmall {
        font-size: 70%;
    }

    .button-small {
        font-size: 85%;
    }

    .button-large {
        font-size: 110%;
    }

    .button-xlarge {
        font-size: 125%;
    }

    .completed {
        text-decoration: line-through;
    }

  </style>

</todo>
