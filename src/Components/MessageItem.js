import React from 'react';
import './MessageItem.css';

export default ({data, user}) => {
    return (
        <div className="messageLine"
        style={{
            justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
        }}
        >
            <div
               className="messageItem"
               style={{
                backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'
               }}
            >
                <div className="messageText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit, orci sit amet fermentum rutrum, est odio tempor tellus, in lacinia massa nibh luctus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut et lacinia odio. Aliquam eu justo sed arcu eleifend iaculis sit amet a nulla. Nam in elit id mauris blandit varius. Sed mattis sollicitudin erat, at sagittis velit blandit eu. Donec rutrum risus lectus, ut facilisis lorem fringilla non. Nulla interdum quam magna, ut pretium justo faucibus vel. Morbi eleifend accumsan arcu, eget interdum erat maximus ac. Nullam ultrices risus lacus, nec ultrices eros porta a. Cras dapibus interdum sem sit amet faucibus. Sed eu quam id dolor eleifend rutrum et sed libero. Duis imperdiet euismod justo, in posuere quam mollis hendrerit. Aenean eu rhoncus velit, ut sollicitudin libero. Quisque eget aliquam tellus. Curabitur facilisis odio ut eleifend tempor.{data.body}</div>
                <div className="messageDate">19:00</div>
            </div>
        </div>
    );
}