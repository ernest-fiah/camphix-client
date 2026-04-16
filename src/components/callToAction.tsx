import { motion } from "framer-motion";

export default function callToAction() {
    const users = [
        {
            name: "Kwame Mensah",
            role: "Project Manager – Construction",
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
            email: "kwame@camphixenterprise.com",
            phone: "+233501234567",
        },
        {
            name: "Ama Boateng",
            role: "Architectural Designer",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
            email: "ama@camphixenterprise.com",
            phone: "+233501234568",
        },
        {
            name: "Kofi Owusu",
            role: "Civil Engineer",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
            email: "kofi@camphixenterprise.com",
            phone: "+233501234569",
        },
        {
            name: "Abena Mensah",
            role: "Land Surveyor",
            img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100",
            email: "abena@camphixenterprise.com",
            phone: "+233501234570",
        },
        {
            name: "Yaw Adjei",
            role: "Real Estate Developer",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
            email: "yaw@camphixenterprise.com",
            phone: "+233501234571",
        },
        {
            name: "Esi Johnson",
            role: "Procurement & Logistics Lead",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
            email: "esi@camphixenterprise.com",
            phone: "+233501234572",
        },
    ];

    return (
        <div className="flex items-center justify-center px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {users.map((user, index) => (
                    <motion.div
                        key={index}

                        /* ✅ scroll-up premium reveal */
                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                            delay: index * 0.06,
                        }}

                        className="w-80 border border-gray-300 rounded-lg divide-y divide-gray-300 mt-10"
                    >
                        {/* HEADER */}
                        <div className="flex items-start justify-between p-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-base font-medium text-gray-800">
                                        {user.name}
                                    </h2>
                                    <span className="text-xs px-2 py-0.5 border border-green-400/40 text-green-600 rounded-full">
                                        Camphix
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">{user.role}</p>
                            </div>

                            <img
                                src={user.img}
                                alt={user.name}
                                className="h-10 w-10 rounded-full"
                            />
                        </div>

                        {/* CTA */}
                        <div className="flex divide-x divide-gray-300">

                            {/* EMAIL */}
                            <a
                                href={`mailto:${user.email}`}
                                className="w-1/2 py-3 flex items-center justify-center text-sm text-gray-600 hover:text-black transition"
                            >
                                📧 Email
                            </a>

                            {/* CALL */}
                            <a
                                href={`tel:${user.phone}`}
                                className="w-1/2 py-3 flex items-center justify-center text-sm text-gray-600 hover:text-black transition"
                            >
                                📞 Call
                            </a>

                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
    );
}