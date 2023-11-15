import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { validRegex } from '../../email/emailValid';
import { editPassword, editProfile } from '../../Redux/actions/profileAction'
import {notify} from '../../Components/Util/notify'
import { useNavigate } from 'react-router';

const ProfileHook = () => {

    console.log(validRegex);

    const navigate = useNavigate();
    
    const [user, setUser] = React.useState([]);

    const [openEdit, setOpenEdit] = React.useState(false);

    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }else {
            setUser([]);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }else {
            setUser([]);
        }
    }, [openEdit]);

    //edit profile
    const dispatch = useDispatch();

    const [loadingEdit, setLoadingEdit] = React.useState(false);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);

    useEffect(() => {
        if(user){
            setEmail(user.email);
            setName(user.name);
            setPhone(user.phone);
        }
    }, [user]);

    const handleOpenEdit = () => {
        setOpenEdit(!openEdit);
    };

    const handleName = (e) => {
        setName(e.target.value);
        console.log(name);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };

    const handlePhone = (e) => {
        setPhone(e.target.value)
    };

    const handleEditProfile = async () => {
        if (name === "" && email === "" && phone === "") {
            setOpenEdit(!openEdit);
            notify("برجاء ادخال بيانات", "error");
            return ;
        }
        if (email === "") {
            setOpenEdit(!openEdit);
            notify("برجاء ادخال الايميل", "error");
            return ;
        }else if (!email.match(validRegex)) {
            setOpenEdit(!openEdit);
            notify("برجاء ادخال ايميل صحيح مثل user234@gmail.com", "error");
            return ;
        };
        if (name === "") {
            setOpenEdit(!openEdit);
            notify("برجاء ادخال اسم المستخدم", "error");
            return ;
        }else if (name.length <= 4) {
            setOpenEdit(!openEdit);
            notify(`برجاء ادخال اسم عدد احرفه اكبر من 4 \n ${name}128 :اقتراح`, "error");
            return ;
        };
        if (phone === "") {
            setOpenEdit(!openEdit);
            notify("برجاء ادخال رقم الهاتف", "error");
            return ;
        };
        var bodyEdit = {};
        if (user.email === email) {
            bodyEdit = {
                name,
                phone
            }
        }else {
            bodyEdit = {
                name,
                email,
                phone
            }
        }
        setLoadingEdit(true);
        await dispatch(editProfile(bodyEdit));
        setLoadingEdit(false);
        setOpenEdit(!openEdit);
    };

    const newUser = useSelector(state => state.profileReducer.editProfile);

    useEffect(() => {
        if (loadingEdit === false) {
            if (newUser && newUser.status === 200) {
                notify("تم تعديل البيانات بنجاح", "success");
                localStorage.setItem("user", JSON.stringify(newUser.data.data.user));
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000);
            }
        }
    }, [loadingEdit]);

    //edit password
    const [currentPassword, setCurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [press, setPress] = useState(false);

    const handleCurrentPassword = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleEditPassword = async (e) => {
        e.preventDefault();
        if (currentPassword === "") { 
            notify("برجاء ادخال كلمة السر القديمه", "error")
            return ; 
        }
        if (password === "") {
            notify("برجاء ادخال كلمة السر الجديده", "error");
            return ;
        }
        if (passwordConfirm !== password) {
            notify("كلمة السر الجديده غير مطابقة", "error")
            return ; 
        } 
        setLoading(true);
        setPress(true);
        await dispatch(editPassword({
            currentPassword,
            password,
            passwordConfirm
        }));
        setLoading(false);
    };

    const logOut = () => {
        setUser("");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }

    const newPassword = useSelector(state => state.profileReducer.editPassword);

    useEffect(() => {
        if (loading === false) {
            if (newPassword && newPassword.status === 200) {
                notify("تم تحديث كلمة السر بنجاح", "success");
                logOut();
                navigate('/login')
            }else if (newPassword && newPassword.status === 400) {
                notify("كلمة السر القديمه غير صحيحه", "error");
            }
        }
    }, [loading])

    return [openEdit, handleOpenEdit, loadingEdit, handleEditProfile, user, email, phone, name, handleName, handleEmail, handlePhone,
        currentPassword, password, passwordConfirm, loading, press, handleCurrentPassword,
        handlePassword, handleConfirmPassword, handleEditPassword
    ];
}

export default ProfileHook
