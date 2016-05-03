function ViewModel(model) {
    console.log('new model instance :', model);

    var notify = {
        update: function(prop, value) {},
    };
    model.set(prop, value);

    bla.addEventListener('update', update);
    bla.addEventListener('fetch', update);

}

mate.ViewModel = ViewModel;