(function() {var implementors = {};
implementors['libc'] = [];implementors['typenum'] = ["impl&lt;Rhs: <a class='trait' href='typenum/marker_traits/trait.Bit.html' title='typenum::marker_traits::Bit'>Bit</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;Rhs&gt; for <a class='enum' href='typenum/bit/enum.B0.html' title='typenum::bit::B0'>B0</a>","impl&lt;Rhs: <a class='trait' href='typenum/marker_traits/trait.Bit.html' title='typenum::marker_traits::Bit'>Bit</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;Rhs&gt; for <a class='enum' href='typenum/bit/enum.B1.html' title='typenum::bit::B1'>B1</a>","impl&lt;U: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;U&gt; for <a class='enum' href='typenum/uint/enum.UTerm.html' title='typenum::uint::UTerm'>UTerm</a>","impl&lt;B: <a class='trait' href='typenum/marker_traits/trait.Bit.html' title='typenum::marker_traits::Bit'>Bit</a>, U: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='enum' href='typenum/uint/enum.UTerm.html' title='typenum::uint::UTerm'>UTerm</a>&gt; for <a class='struct' href='typenum/uint/struct.UInt.html' title='typenum::uint::UInt'>UInt</a>&lt;U, B&gt;","impl&lt;Ul: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>, Ur: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='typenum/uint/struct.UInt.html' title='typenum::uint::UInt'>UInt</a>&lt;Ur, <a class='enum' href='typenum/bit/enum.B0.html' title='typenum::bit::B0'>B0</a>&gt;&gt; for <a class='struct' href='typenum/uint/struct.UInt.html' title='typenum::uint::UInt'>UInt</a>&lt;Ul, <a class='enum' href='typenum/bit/enum.B0.html' title='typenum::bit::B0'>B0</a>&gt; <span class='where'>where Ul: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;Ur&gt;</span>","impl&lt;Ul: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>, Ur: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='typenum/uint/struct.UInt.html' title='typenum::uint::UInt'>UInt</a>&lt;Ur, <a class='enum' href='typenum/bit/enum.B1.html' title='typenum::bit::B1'>B1</a>&gt;&gt; for <a class='struct' href='typenum/uint/struct.UInt.html' title='typenum::uint::UInt'>UInt</a>&lt;Ul, <a class='enum' href='typenum/bit/enum.B0.html' title='typenum::bit::B0'>B0</a>&gt; <span class='where'>where Ul: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;Ur&gt;</span>","impl&lt;Ul: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>, Ur: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='typenum/uint/struct.UInt.html' title='typenum::uint::UInt'>UInt</a>&lt;Ur, <a class='enum' href='typenum/bit/enum.B0.html' title='typenum::bit::B0'>B0</a>&gt;&gt; for <a class='struct' href='typenum/uint/struct.UInt.html' title='typenum::uint::UInt'>UInt</a>&lt;Ul, <a class='enum' href='typenum/bit/enum.B1.html' title='typenum::bit::B1'>B1</a>&gt; <span class='where'>where Ul: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;Ur&gt;</span>","impl&lt;Ul: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>, Ur: <a class='trait' href='typenum/marker_traits/trait.Unsigned.html' title='typenum::marker_traits::Unsigned'>Unsigned</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='typenum/uint/struct.UInt.html' title='typenum::uint::UInt'>UInt</a>&lt;Ur, <a class='enum' href='typenum/bit/enum.B1.html' title='typenum::bit::B1'>B1</a>&gt;&gt; for <a class='struct' href='typenum/uint/struct.UInt.html' title='typenum::uint::UInt'>UInt</a>&lt;Ul, <a class='enum' href='typenum/bit/enum.B1.html' title='typenum::bit::B1'>B1</a>&gt; <span class='where'>where Ul: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;Ur&gt;</span>",];implementors['num_bigint'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a, 'b&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'b <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>",];implementors['num'] = ["impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()